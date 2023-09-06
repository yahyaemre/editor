import React, { useContext } from 'react'
import { CodeContext } from '../context';

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

export default function JsEditor() {

    const { jsCode, setJsCode, editorFontSize } = useContext(CodeContext);

    return (
        <div>
            <AceEditor
                placeholder="JS Code"
                mode="javascript"
                theme="monokai"
                name="js-editor"
                fontSize={parseInt(editorFontSize)}
                width='100%'
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={jsCode}
                onChange={(e) => setJsCode(e)}
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
