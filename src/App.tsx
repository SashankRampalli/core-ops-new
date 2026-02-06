import { useCallback, useState } from "react";
import { SelectBox } from "devextreme-react";

function App() {
  const themeData = ["light", "dark"];
  const themeMarker = "theme.";

  const [value, setValue] = useState(themeData[0]);

  const onValueChanged = useCallback((accent) => {
    setValue(accent);
    for (let index in document.styleSheets) {
      const styleSheet = document.styleSheets[index],
        href = styleSheet.href;
      if (href) {
        const themeMarkerPosition = href.indexOf(themeMarker);
        const startPosition = themeMarkerPosition + themeMarker.length,
          endPosition = href.indexOf(".css"),
          fileNamePart = href.substring(startPosition, endPosition);
        if (fileNamePart.includes("custom-scheme")) {
          styleSheet.disabled = !(
            accent === fileNamePart.substring(fileNamePart.indexOf(".") + 1)
          );
        }
      }
    }
  }, []);

  return (
    <div>
      <h2>App</h2>
      <SelectBox
        dataSource={themeData}
        value={value}
        onValueChange={onValueChanged}
      />
    </div>
  );
}

export default App;
