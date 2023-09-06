import React, { useContext } from 'react'
import { CodeContext } from '../context'

export default function Output() {

    const { htmlCode, cssCode, jsCode } = useContext(CodeContext);

    const src = `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body>
                    ${htmlCode}
                </body>

                <style>
                    ${cssCode}
                </style>

                <script>
                    ${jsCode}
                </script>
        </html>
    `;

    if (!htmlCode) return (
        <div className="h-full w-full flex justify-center items-center">
            <h1 className="text-4xl font-bold text-gray-700">Preview Here!</h1>
        </div>
    )

    return (
        <div className="h-full w-full">
            <iframe
                srcDoc={src}
                title="output"
                sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
                width={'100%'}
                height={'100%'}
                frameBorder="0"
            />
        </div>
    )
}
