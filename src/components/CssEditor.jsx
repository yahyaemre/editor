import React, { useContext } from 'react'
import { CodeContext } from '../context'

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

export default function CssEditor() {

    const { cssCode, setCssCode, editorFontSize } = useContext(CodeContext);

    return (
        <div>
            <AceEditor
                placeholder="CSS Code"
                mode="css"
                theme="monokai"
                name="css-editor"
                fontSize={parseInt(editorFontSize)}
                width='100%'
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={cssCode}
                onChange={(e) => setCssCode(e)}
                setOptions={{
                    useWorker: false,
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: false,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                }} />
        </div>
    )
}
