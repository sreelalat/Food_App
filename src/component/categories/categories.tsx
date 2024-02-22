import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Dishes from './dishes'
import FadeIn from 'react-fade-in';

const Categories = () => {
    // const [tabs, setTabs] = useState([
    //     { menu_category_id: '11', menu_category: "Salads and Soup" },
    //     { menu_category_id: '12', menu_category: "Salads and one" },
    //     { menu_category_id: '13', menu_category: "Salads and two" },
    //     { menu_category_id: '14', menu_category: "Salads and three" },
    // ])
    const restaurantData = useSelector((state: any) => state.main.restaurantData)

    const [activeTab, setActiveTab] = useState(restaurantData[0]?.table_menu_list[0]?.menu_category_id)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const value = restaurantData[0]?.table_menu_list.findIndex((item: any) => item.menu_category_id === activeTab)
        setIndex(value)
    }, [activeTab])

    return (
        <div>
            <div id='Tabs' className='flex overflow-auto w-screen'>
                {restaurantData[0]?.table_menu_list?.map((tab: any, index: number) => {
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
            <div className=' bg-[#030711] h-[calc(100vh-123px)] overflow-auto'>
                <FadeIn>
                    {
                        restaurantData[0]?.table_menu_list[index].category_dishes.map((dish: any, index: number) => {
                            return (
                                <Dishes key={dish.dish_id} dish={dish} />
                            )
                        })
                    }
                </FadeIn>
            </div>
        </div>
    )
}

export default Categories