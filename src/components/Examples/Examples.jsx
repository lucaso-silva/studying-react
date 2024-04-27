import { useState } from "react";

import { EXAMPLES } from "../../data.js";

import TabButton from "../TabButton/TabButton.jsx";
import Section from "../Section/Section.jsx";
import Tabs from "../Tabs/Tabs.jsx";

export default function Examples() {
    const [ selectedMessage, setSelectedMessage ] = useState();

    function handleSelect(selectedButton) {
      setSelectedMessage(selectedButton);
    }
  
    return (
        <Section title="Examples" id='examples'>
          <Tabs 
            WrapperContainer="menu"
            buttons={
            <>
              <TabButton 
                isSelected={selectedMessage === "components"}  
                onClick={()=> handleSelect("components")}
              >
                Components
              </TabButton>

              <TabButton 
                isSelected={selectedMessage === "jsx"} 
                onClick={()=> handleSelect("jsx")}
              >
                JSX
              </TabButton>

              <TabButton 
                isSelected={selectedMessage === "props"} 
                onClick={()=> handleSelect("props")}
              >
                Props
              </TabButton>

              <TabButton 
                isSelected={selectedMessage === "state"} 
                onClick={()=> handleSelect("state")}
              >
                State
              </TabButton>
            </>
            }
          >

            {!selectedMessage ? (
              <div id="tab-content">
                <p>Please select a topic above</p>
              </div>
              ) : (
              <div id="tab-content">
                <h3>{EXAMPLES[selectedMessage].title}</h3>
                <p>{EXAMPLES[selectedMessage].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedMessage].code}</code>
                </pre>
              </div>
              )
            }
          </Tabs>
        </Section>
    )
}