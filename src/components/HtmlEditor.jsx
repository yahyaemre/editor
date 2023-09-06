import React, { useContext } from 'react'
import { CodeContext } from '../context';

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

export default function HtmlEditor() {

    const { htmlCode, setHtmlCode, editorFontSize } = useContext(CodeContext);

    return (
        <div>
            <AceEditor
                placeholder="HTML Code"
                mode="html"
                theme="monokai"
                name="html-editor"
                fontSize={parseInt(editorFontSize)}
                width='100%'
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={htmlCode}
                onChange={(e) => setHtmlCode(e)}
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
