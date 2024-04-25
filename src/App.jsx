import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';

import { useState } from 'react';

function App() {
  const [ selectedMessage, setSelectedMessage ] = useState();

  function handleSelect(selectedButton) {
    setSelectedMessage(selectedButton);
  }

  return (
    <div>
      <Header />

      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />

            {/* <CoreConcept 
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            /> */}

            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        
        <section id='examples'>
            <h2>Examples</h2>

            <menu>
              <TabButton 
                isSelected={selectedMessage === "components"}  
                onSelect={()=> handleSelect("components")}
              >
                Components
              </TabButton>

              <TabButton 
                isSelected={selectedMessage === "jsx"} 
                onSelect={()=> handleSelect("jsx")}
              >
                JSX
              </TabButton>

              <TabButton 
                isSelected={selectedMessage === "props"} 
                onSelect={()=> handleSelect("props")}
              >
                Props
              </TabButton>
              
              <TabButton 
                isSelected={selectedMessage === "state"} 
                onSelect={()=> handleSelect("state")}
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
        </section>
      </main>
    </div>
  );
}

export default App;
