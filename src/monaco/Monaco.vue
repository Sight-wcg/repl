<template>
  <div id="container" ref="containerRef"></div>
</template>

<script setup lang="ts">
import * as onigasm from 'onigasm';
import onigasmWasm from 'onigasm/lib/onigasm.wasm?url';
import editorWorker from 'monaco-editor-core/esm/vs/editor/editor.worker?worker&inline';
import vueWorker from 'monaco-volar/vue.worker?worker&inline';
import { editor, KeyCode, KeyMod, Uri } from 'monaco-editor-core';
import { loadGrammars, loadTheme, prepareVirtualFiles } from 'monaco-volar';
import { inject, nextTick, onBeforeUnmount, onMounted, Ref, ref, shallowRef, watch, watchEffect } from 'vue';
import { getOrCreateModel } from './utils';

const props = withDefaults(defineProps<{
  value?: string
  language?: string;
  filename?: string;
  readonly?: boolean
}>(), {
  value: '',
  readonly: false
})

const emits = defineEmits<{
  (e: 'change', value: string): void,
  (e: 'save', value: string): void
}>()

const injectTheme = inject("repl-theme") as Ref<string>
const ready = ref(false);
const monacoEditor = shallowRef<editor.IStandaloneCodeEditor | undefined>(undefined);
const containerRef = ref<HTMLElement | null>(null);
const currentModel = shallowRef<editor.ITextModel>(
  getOrCreateModel(
    Uri.parse(`file:///${props.filename}`),
    props.language ?? 'vue',
    props.value ?? '',
  )
)

watchEffect(() => {
  if (currentModel.value.getValue() !== props.value) {
    currentModel.value.setValue(props.value)
  }
})

const loadOnigasm = async () => onigasm.loadWASM(onigasmWasm);
const loadMonacoEnv = () => {
  (self as any).MonacoEnvironment = {
    async getWorker(_: any, label: string) {
      if (label === "vue") {
        return new vueWorker();
      }
      return new editorWorker();
    },
  };
}
//const model = editor.createModel('<template>\n\t<div>Hello World</div>\n</template>', 'vue', Uri.parse('file:///demo.vue'))
onMounted(() => {
  Promise.all([loadMonacoEnv(), loadOnigasm(), loadTheme()]).then(async ([, , theme]) => {
    ready.value = true;
    await nextTick();
    // Check for valid element.
    if (!containerRef.value) {
      throw new Error("Cannot find containerRef");
    };
    // Prepare the virtual files.
    prepareVirtualFiles();
    // Create the editor.
    const editorInstance = editor.create(containerRef.value, {
      theme,
      language: props.language,
      model: currentModel.value,
      readOnly: props.readonly,
      automaticLayout: true,
      scrollBeyondLastLine: false,
      minimap: {
        enabled: false,
      },
      inlineSuggest: {
        enabled: false,
      },
    });
    monacoEditor.value = editorInstance;
    loadGrammars(editorInstance);

    editorInstance.addCommand(KeyMod.CtrlCmd | KeyCode.KeyS, () => {
      emits('save', editorInstance.getValue());
    });
    editorInstance.onDidChangeModelContent(() => {
      emits('change', editorInstance.getValue());
    });

    watch(injectTheme, () => {
      //FIXME: 临时
      // BuiltinTheme = 'vs' | 'vs-dark' | 'hc-black' | 'hc-light';
      editor.setTheme(injectTheme.value);
    },{
      immediate: true
    })
  });
});

onBeforeUnmount(() => {
  monacoEditor.value?.dispose();
});
</script>

<style scoped>
#container {
  width: 100%;
  min-height: 800px;
}
</style>