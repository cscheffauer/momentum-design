import React from 'react';

import '@maxgraph/core/css/common.css';
import '@momentum-design/tokens/dist/css/core/complete.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/light-stable.css';
import '@momentum-design/fonts/src/css/fonts.css';
import './style.css';
import GraphContainer from './GraphContainer';
import ControlsSection from './controls/ControlsSection';
import DetailsSection from './details/DetailsSection';
import HeaderSection from './header/HeaderSection';
import ExportSection from './footer/ExportSection';

import { useSelection } from './useSelection.hook';
import { useDetailsSection } from './useDetailsSection.hook';
import { useColorPreview } from './useColorPreview.hook';
import { useColorState } from './useColorState.hook';
import { useGraph } from './useGraph.hook';
import { useTokens } from './useTokens.hook';

const App = () => {
  const [hue, setHue] = React.useState<number>(0);
  const { graph, initializeGraph } = useGraph();
  const { selectedNodes, selectedColorNodes, firstSelectedNodeId } = useSelection({ graph });
  const { detailsCollapsed } = useDetailsSection({ selectedColorNodes });

  const { colors, setColorsAction, deleteColorAction } = useColorState(graph);
  const { colorPreviews } = useColorPreview({ colors, hue });
  const { tokens, setTokens, getColorValueOfToken } = useTokens();

  const handleHueChange = (newHue: number) => {
    setHue(newHue);
  };

  return (
    <div className="background-wrapper">
      <HeaderSection hue={hue} setHue={handleHueChange} />
      {graph && (
        <ControlsSection
          graph={graph}
          selectedNodes={selectedNodes}
          selectedColorNodes={selectedColorNodes}
          setColorsAction={setColorsAction}
          deleteColorAction={deleteColorAction}
          tokens={tokens}
          setTokensAction={setTokens}
        />
      )}
      <div className="content">
        <div className="main-area">
          <GraphContainer initializeGraph={initializeGraph} />
        </div>
        {!detailsCollapsed && selectedColorNodes.length === 1 && (
          <DetailsSection
            nodeId={firstSelectedNodeId}
            color={colors[firstSelectedNodeId]}
            setColorsAction={setColorsAction}
            previewColors={colorPreviews[firstSelectedNodeId]}
            getColorValueOfToken={getColorValueOfToken}
          />
        )
        }
      </div>
      <ExportSection colors={colors}/>
    </div>

  );
};

export default App;
