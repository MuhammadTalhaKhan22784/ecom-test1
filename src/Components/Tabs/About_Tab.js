import React,{useContext} from 'react'
import {Tab_Context_Provider} from "./Tabs"
import {useHistory} from "react-router-dom"

function About_Tab() {
    let { activeTab, setActiveTab } = useContext(Tab_Context_Provider)
    let history = useHistory()



    let send_Page = (route) => {
        setActiveTab("")
        history.push(route)
    }

    return (
        <div className="Tab_Pan_About">
        <table className="Tab_Pan_About_table">
          <thead>
            <tr style={{ height: "50px" }}>
              <th className="Tab_Pan_About_table_th">Discover</th>
              <th className="Tab_Pan_About_table_th">Policies</th>
              <th className="Tab_Pan_About_table_th">Communtity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="Tab_Pan_About_table_td">How it works</td>
              <td className="Tab_Pan_About_table_td">trust and safety</td>
              <td className="Tab_Pan_About_table_td">forum</td>
            </tr>
            <tr>
              <td className="Tab_Pan_About_table_td">mobail apps</td>
              <td className="Tab_Pan_About_table_td">privacy policy</td>
            </tr>
            <tr>
              <td className="Tab_Pan_About_table_td"> help center</td>
              <td className="Tab_Pan_About_table_td">
                terms & conditions
              </td>
            </tr>
            <tr>
              <td className="Tab_Pan_About_table_td">info board</td>
              <td className="Tab_Pan_About_table_td">cookie policy</td>
            </tr>
          </tbody>
        </table>
        <table
          style={{ marginTop: "20px", width: "400px" }}
        // className="Tab_Pan_About_table"
        >
          <thead>
            <tr style={{ height: "20px" }}>
              <th className="Tab_Pan_About_table_th">company</th>
              <th className="Tab_Pan_About_table_th">privacy</th>
              <th className="Tab_Pan_About_table_th"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="Tab_Pan_About_table_td" onClick={() => send_Page("/about-us")} 
              style={{cursor: "pointer"}}
              > about us</td>
              <td className="Tab_Pan_About_table_td">cookies settings</td>
              <td className="Tab_Pan_About_table_td"></td>
            </tr>
            <tr>
              <td className="Tab_Pan_About_table_td">jobs</td>
              <td className="Tab_Pan_About_table_td"></td>
            </tr>
            <tr>
              <td className="Tab_Pan_About_table_td"> press</td>
              <td className="Tab_Pan_About_table_td"></td>
            </tr>
            <tr>
              <td className="Tab_Pan_About_table_td">advertising</td>
              <td className="Tab_Pan_About_table_td"></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default About_Tab
