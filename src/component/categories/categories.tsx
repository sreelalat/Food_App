import React, { useState } from 'react'

const Categories = () => {
    const [tabs, setTabs] = useState([
        { menu_category_id: '11', menu_category: "Salads and Soup" },
        { menu_category_id: '12', menu_category: "Salads and one" },
        { menu_category_id: '13', menu_category: "Salads and two" },
        { menu_category_id: '14', menu_category: "Salads and three" },
    ])
    const [activeTab, setActiveTab] = useState('11')
    return (
        <div>
            <div id='Tabs' className='flex overflow-auto w-screen'>
                {tabs.map((tab: any, index: number) => {
                    return (
                        <div
                            onClick={() => setActiveTab(tab.menu_category_id)}
                            key={tab.menu_category_id}
                            className={
                                `w-fit whitespace-nowrap px-4 pb-4 cursor-pointer 
                                ${activeTab === tab.menu_category_id ?
                                    "text-[#dd2626] border-b-2 border-b-[#dd2626]"
                                    :
                                    " border-b-2 border-b-transparent"
                                }
                        `
                            }
                        >
                            {tab.menu_category}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories