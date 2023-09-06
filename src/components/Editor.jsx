import React, { useContext } from 'react'
import HtmlEditor from './HtmlEditor'
import CssEditor from './CssEditor'
import JsEditor from './JsEditor'
import { CodeContext } from '../context'

export default function Editor() {
    const { activeTab, setActiveTab, editorFontSize, setEditorFontSize } = useContext(CodeContext);
    return (
        <div className='bg-[#272822] lg:w-[60%] w-[70%] text-white py-2 px-4'>
            <div className="w-full">
                <p className='py-2 stroke text-transparent text-xl font-extrabold'>yahyaemre.dev/editor</p>
                <div className="flex justify-between  border-b py-4 border-neutral-700 items-center">
                    <div>
                        <button className='px-4 py-2 rounded-lg' style={(({
                            backgroundColor: activeTab === "html" && "#3e3d32",
                        }))}
                            onClick={() => setActiveTab('html')}
                        >
                            HTML
                        </button>
                        <button className='px-4 py-2 rounded-lg' style={(({
                            backgroundColor: activeTab === "css" && "#3e3d32",
                        }))}
                            onClick={() => setActiveTab('css')}
                        >
                            CSS
                        </button>
                        <button className='px-4 py-2 rounded-lg' style={(({
                            backgroundColor: activeTab === "js" && "#3e3d32",
                        }))}
                            onClick={() => setActiveTab('js')}
                        >
                            JS
                        </button>
                    </div>
                    <div className='lg:block hidden'>
                        <label htmlFor="fontsize" className='px-2'>Font Size</label>
                        <select
                            id="fontsize"
                            name='fontsize'
                            value={editorFontSize}
                            onChange={(e) => setEditorFontSize(e.target.value)}
                            className='border border-neutral-600 text-center bg-transparent px-2 py-1 rounded-md'>
                            <option value="15">Default</option>
                            <option value="16">Big</option>
                            <option value="17">Huge</option>
                            <option value="18">DobDob</option>
                        </select>
                    </div>
                </div>
                <div className='py-4'>
                    {activeTab === 'html' && <HtmlEditor />}
                    {activeTab === 'css' && <CssEditor />}
                    {activeTab === 'js' && <JsEditor />}
                </div>
            </div >
        </div >
    )
}
