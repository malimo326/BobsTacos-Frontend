import React from 'react';
import '../tabOption/tabOptionStyles.css';
import '../Styles/commonClass.css';

const tabs=[
  {
    id:1,
    name: "Delivery",
    active_img: "https://cdn-icons-png.flaticon.com/512/5637/5637217.png",
    backdrop: "FCEEC0",
    inactive_img: "https://cdn-icons-png.flaticon.com/512/5637/5637246.png"
  },
  {
    id:2,
    name: "Dessert",
    active_img: "https://cdn-icons-png.flaticon.com/512/5075/5075294.png",
    backdrop: "ESF3F3",
    inactive_img: "https://cdn-icons-png.flaticon.com/512/5075/5075311.png"
  }
]

const TabOption = ({activeTab, setActiveTab}) => {
  return (
    <div className="tab-options">
      <div className="max-width options-wrapper">
        {tabs.map((tab)=>{
          return (
            <div 
            key={tab.id}
            onClick={()=> setActiveTab(tab.name)}
            className={`tab-item absolute-center cur-po ${
              activeTab === tab.name && "active-tab"
              }`}
            >

            <div className='tab-image-container absolute-center' 
            style={{backgroundColor: `${activeTab === tab.name?tab.backdrop: ""}`}}
            >
              <img className='tab-image' alt={tab.name} src={
                activeTab === tab.name ? tab.active_img : tab.inactive_img} 
                />
            </div>

            <div className='tab-name' >{tab.name}</div>
          </div>
          )
        })}
      </div>
    </div>

  );
}

export default TabOption;