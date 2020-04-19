<template>
  <div class="container">
    <div class="code-container">
      <CodeEditor
        :code="code"
        :options="cmInputOptions"
        :onTextChange="onChange"
      />
    </div>
    <div class="code-container">
      <CodeEditor
        :code="parsedModel"
        :options="cmOutputOptions"
      />
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import { generateModel, validateModel } from 'fake-data-generator'
import CodeEditor from './CodeMirror'
import codeExample from '@/assets/example'

export default {
  name: 'Home',
  components: {
    CodeEditor
  },
  data () {
    return {
      code: codeExample,
      cmInputOptions: {
        extraKeys: { 'Ctrl': 'autocomplete' },
        foldGutter: true,
        hintOptions: {
          completeSingle: false
        },
        lineNumbers: true,
        line: true,
        matchBrackets: true,
        mode: 'text/javascript',
        showCursorWhenSelecting: true,
        styleActiveLine: true,
        styleSelectedText: true,
        tabSize: 2,
        theme: 'base16-dark'
      },
      cmOutputOptions: {
        foldGutter: true,
        line: true,
        lineNumbers: true,
        matchBrackets: true,
        mode: 'text/javascript',
        readOnly: true,
        showCursorWhenSelecting: true,
        styleActiveLine: false,
        styleSelectedText: true,
        tabSize: 2,
        theme: 'base16-dark'
      }
    }
  },
  created () {
    this.parseModel()
  },
  methods: {
    delayParse () {
      if (this.shouldParse) {
        this.shouldParse = false
        this.parseModel()
      }
    },
    parseModel () {
      const parsedCode = JSON.parse(this.code)
      const generatedModel = generateModel({
        amountArg: 2,
        modelArg: parsedCode,
        inputType: 'object',
        outputType: 'object'
      })
      this.parsedModel = JSON.stringify(generatedModel, null, '\t')
    },
    validate () {
      validateModel()
    },
    onChange (code) {
      this.code = code
    }
  },
  watch: {
    code (newValue) {
      this.shouldParse = true
      debounce(this.delayParse, 100)()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body {
  padding-left: 40px;
  padding-right: 40px;
}
.container {
  text-align: left;
  display: flex;
}
.code-container {
  flex: 1;
  width: 100%;
  max-width: 50%
}
@media only screen and (max-width: 992px) {
  .container {
    display: block;
    padding: 10px;
  }
  .code-container {
    padding-top: 20px;
    padding-bottom: 20px;
    max-width: 100%;
  }
}
</style>
