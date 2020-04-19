<template>
  <div class="container">
    <div class="code-container">
      <codemirror v-model="code" :options="cmOption" />
    </div>
    <div class="pre-container">
      <pre class="pre">{{ code }}</pre>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import { codemirror } from 'vue-codemirror'

// base style
import 'codemirror/lib/codemirror.css'

// theme css
import 'codemirror/theme/base16-dark.css'
// language
import 'codemirror/mode/vue/vue.js'

// active-line.js
import 'codemirror/addon/selection/active-line.js'

// styleSelectedText
import 'codemirror/addon/selection/mark-selection.js'
import 'codemirror/addon/search/searchcursor.js'

// highlightSelectionMatches
import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/search/matchesonscrollbar.js'
import 'codemirror/addon/search/match-highlighter.js'

// keyMap
import 'codemirror/mode/clike/clike.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/comment/comment.js'
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/search/search.js'
import 'codemirror/keymap/sublime.js'

// foldGutter
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/markdown-fold.js'
import 'codemirror/addon/fold/xml-fold.js'

export default {
  name: 'Home',
  components: {
    codemirror
  },
  data () {
    return {
      code: 'const A = 10',
      cmOption: {
        tabSize: 2,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        foldGutter: true,
        styleSelectedText: true,
        mode: 'text/javascript',
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: 'base16-dark',
        extraKeys: { 'Ctrl': 'autocomplete' },
        hintOptions: {
          completeSingle: false
        }
      }
    }
  },
  methods: {
    delayParse () {
      if (this.shouldParse) {
        this.shouldParse = false
        this.parseModel()
      }
    },
    parseModel (newValue) {
      console.log('new value ::: ', newValue)
      console.log('parsing...', this.code)
      this.parsedModel = `-${this.parsedModel}`
    }
  },
  watch: {
    code (newValue) {
      this.shouldParse = true
      debounce(this.delayParse, 500)()
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
  width: 100%
}
.pre-container {
  flex: 1;
  max-height: 400px;
  width: 100%;
}
.pre {
  padding-top: 4px;
  margin: 0;
  height: 296px;
  overflow: scroll;
  padding-left: 20px;
}
</style>
