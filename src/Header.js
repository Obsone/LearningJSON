import React from 'react'

import './Header.css'
import ilvdex from './ilvdex.json'

const Header = () => {
  return (
    <div>
        <div className="inner">
            {
                ilvdex.map(item => {
                    return (
                    <div className="card_backsite" key={item.id}>
                        <div className="card_backsite_wrapper">
                            <div className="card_backsite_info">
                                <div className="illuvial_name">
                                <div className="divider" >
                                    <span className="helper">{item.atlas}</span>
                                    </div>
                                <div className="divider"  >
                                    <span className="helper"></span><img src={item.masteryPi}  alt="" />
                                    <span className="helper">50</span>
                                    </div>
                                </div>
                                <div className="illuvial_type">     
                                    <div className="divider">
                                        <span className="helper"></span><img src={item.affinityWateri} alt=""/>
                                        <span className="helper">Water</span>
                                    </div>
                                    <div className="divider">
                                        <span className="helper"></span><img src={item.classBulwarki} alt=""/>
                                    <span className="helper">{item.ilvaxon}</span>
                                    </div>
                                </div>
                                <div className="illuvial_stage">     
                                    <div className="divider">
                                        <span className="helper"></span><img src={item.stage1i} alt=""/>
                                        <span className="helper">Stage: 1</span>
                                    </div>
                                    <div className="divider">
                                        <span className="helper"></span><img src={item.tier1i} alt=""/>
                                        <span className="helper">Tier: 1</span>
                                    </div>
                                </div>
                                <div className="illuvial_omega_title">   
                                    Omega: 
                                </div>
                                <div className="illuvial_omega">   
                                    Atlas generates a (20% Max Health+100*OP) shield that lasts for up to 5 seconds. While shielded, attacks deal (40*OP) additional energy damage.
                                </div>
                                <div className="illuvial_stats">     
                                    <div className="stats">
                                        <span className="helper"></span><img src={item.healthi} alt=""/>
                                        <span className="helper">950</span>
                                    </div> 
                                    <div className="stats">
                                        <span className="helper"></span><img src={item.attacki} alt=""/>
                                        <span className="helper">25</span>
                                    </div> 
                                    <div className="stats">
                                        <span className="helper"></span><img src={item.defensei} alt=""/>
                                        <span className="helper">40</span>
                                    </div> 
                                    <div className="stats">
                                        <span className="helper"></span><img src={item.speedi} alt=""/>
                                        <span className="helper">120</span>
                                    </div> 
                                    <div className="stats">
                                        <span className="helper"></span><img src={item.criti} alt=""/>
                                        <span className="helper">25</span>
                                    </div> 
                                    <div className="stats">
                                        <span className="helper"></span><img src={item.energyResi} alt=""/>
                                        <span className="helper">50</span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Header