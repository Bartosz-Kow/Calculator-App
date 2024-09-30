import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SetStateAction, useState } from "react";

export default function Index() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState("");
  const [history, setHistory] = useState("");
  const MAX_HISTORY_LENGTH = 50;

  const handleNumberInput = (num: number) => {
    if (displayValue === "0") {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (operator: string) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue("0");
    setHistory((prevHistory) => {
      const newHistory = prevHistory + ` ${displayValue} ${operator}`;

      return newHistory.length > MAX_HISTORY_LENGTH
        ? newHistory.slice(newHistory.length - MAX_HISTORY_LENGTH)
        : newHistory;
    });
  };

  const handleEquals = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === "+") {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === "━") {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === "X") {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === "÷") {
      setDisplayValue((num1 / num2).toString());
    } else if (operator === "%") {
      setDisplayValue((num1 % num2).toString());
    }
    setHistory((prevHistory) => {
      const newHistory = prevHistory + ` ${displayValue} =`;

      return newHistory.length > MAX_HISTORY_LENGTH
        ? newHistory.slice(newHistory.length - MAX_HISTORY_LENGTH)
        : newHistory;
    });
    setOperator(null);
    setFirstValue("");
  };

  const ClearAll = () => {
    setDisplayValue("0");
    setOperator(null);
    setFirstValue("");
    setHistory("");
  };

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.displayContainer}>
        <Text style={styles.historyText}>{history}</Text>
        <Text style={styles.resultText}>{displayValue}</Text>
      </View>

      {/* Keypad */}
      <View style={styles.keypadContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>🔆</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleOperatorInput("%")}
          >
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleOperatorInput("÷")}
          >
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleOperatorInput("X")}
          >
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(7)}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(8)}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(9)}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleOperatorInput("━")}
          >
            <Text style={styles.buttonText}>━</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(4)}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(5)}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(6)}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleOperatorInput("+")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <View style={styles.lastRowContainer}>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleNumberInput(1)}
              >
                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleNumberInput(2)}
              >
                <Text style={styles.buttonText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleNumberInput(3)}
              >
                <Text style={styles.buttonText}>3</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.actionButton} onPress={ClearAll}>
                <Text style={styles.buttonText}>AC</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleNumberInput(0)}
              >
                <Text style={styles.buttonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>.</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={handleEquals}>
            <LinearGradient
              colors={["#ED0E98", "#FE5A2D"]}
              style={styles.equalButton}
            >
              <Text style={styles.equalButtonText}>=</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212327",
    justifyContent: "space-between",
    padding: 20,
  },
  displayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  historyText: {
    color: "#8888",
    fontSize: 18,
  },
  resultText: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "bold",
  },
  keypadContainer: {
    flex: 2,
    justifyContent: "space-between",
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: "#2f3237",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
  actionButton: {
    width: 70,
    height: 70,
    backgroundColor: "#ED0E98",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  equalButton: {
    width: 70,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    marginRight: 10,
  },
  equalButtonText: {
    color: "#fff",
    fontSize: 32,
  },
  lastRowContainer: {
    flex: 1,
  },
});
