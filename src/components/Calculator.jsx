import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Button from "./Buttons";
import Display from "./Display";
import useCalculatorStore from "../store/useCalculatorStore";

const DraggableButton = ({ btn, index, moveButton }) => {
  const dragRef = useDrag({
    type: "BUTTON",
    item: { index },
  })[1];

  const dropRef = useDrop({
    accept: "BUTTON",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveButton(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  })[1];

  const ref = (node) => {
    dragRef(node);
    dropRef(node);
  };

  return (
    <div ref={ref} className="w-[calc(25%-6px)] h-16 flex-grow-0 flex-shrink-0">
      <Button label={btn.label} color={btn.color} />
    </div>
  );
};

const Calculator = () => {
  const { buttons } = useCalculatorStore();

  const moveButton = (fromIndex, toIndex) => {
    useCalculatorStore.setState((state) => {
      const updatedButtons = [...state.buttons];
      const [movedButton] = updatedButtons.splice(fromIndex, 1);
      updatedButtons.splice(toIndex, 0, movedButton);
      return { buttons: updatedButtons };
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-80 p-4 bg-light-calculator-border dark:bg-dark-calculator-border shadow-lg rounded-lg flex flex-col gap-4">
        <Display />
        <div className="flex flex-wrap gap-2 p-2 bg-light-button-backside dark:bg-dark-button-backside rounded-lg">
          {buttons.map((btn, index) => (
            <DraggableButton
              key={btn.label}
              btn={btn}
              index={index}
              moveButton={moveButton}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Calculator;
