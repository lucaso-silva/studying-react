import { useState } from "react";

import { EXAMPLES } from "../../data.js";

import TabButton from "../TabButton/TabButton.jsx";
import Section from "../Section/Section.jsx";

export default function Examples() {
    const [ selectedMessage, setSelectedMessage ] = useState();

    function handleSelect(selectedButton) {
      setSelectedMessage(selectedButton);
    }
  
    return (
        <Section title="Examples" id='examples'>
            <menu>
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
            </menu>

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
        </Section>
    )
}