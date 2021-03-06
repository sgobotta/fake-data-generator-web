<template>
  <div>
    <div class="container">
      <div class="code-container">
        <v-card
          color="grey lighten-4"
          flat
          tile
        >
          <v-toolbar dense>
            <v-spacer />
            <v-toolbar-title>
              Json Model
            </v-toolbar-title>
            <v-spacer />
          </v-toolbar>
        </v-card>
        <CodeEditor
          :code="code"
          :options="cmInputOptions"
          :onTextChange="onChange"
        />
      </div>
      <div class="code-container">
        <v-card
          color="grey lighten-4"
          flat
          tile
        >
          <v-toolbar dense>
            <v-spacer />
            <v-toolbar-title class="toolbar-title">
              Output Model
            </v-toolbar-title>
            <v-spacer />
          </v-toolbar>
        </v-card>
        <CodeEditor
          :code="parsedModel"
          :options="cmOutputOptions"
        />
      </div>
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
<style>
.container {
  text-align: left;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
}
.code-container {
  flex: 1;
  width: 100%;
  max-width: 50%;
  padding-left: 10px;
  padding-right: 10px;
}
@media only screen and (max-width: 992px) {
  .container {
    display: block;
    padding: 10px;
    height: 100%
  }
  .code-container {
    padding-top: 20px;
    padding-bottom: 20px;
    max-width: 100%;
  }
}
.header {
  padding: 40px;
}
.pepe {
  text-align: center
}
</style>
