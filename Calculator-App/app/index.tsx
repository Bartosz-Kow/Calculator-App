import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function Index() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState("");
  const [history, setHistory] = useState("");
  const MAX_HISTORY_LENGTH = 50;

  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

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

  const backgroundColor = isLightMode ? "#F0F0F0" : "#212327";
  const buttonBackgroundColor = isLightMode ? "#E0E0E0" : "#2f3237";
  const textColor = isLightMode ? "#000" : "#fff";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.displayContainer}>
        <Text style={[styles.historyText, { color: textColor }]}>
          {history}
        </Text>
        <Text style={[styles.resultText, { color: textColor }]}>
          {displayValue}
        </Text>
      </View>

      <View style={styles.keypadContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.actionButton} onPress={toggleTheme}>
            <Text style={styles.buttonText}>{isLightMode ? "🌙" : "🔆"}</Text>
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
            style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
            onPress={() => handleNumberInput(7)}
          >
            <Text style={[styles.buttonText, { color: textColor }]}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
            onPress={() => handleNumberInput(8)}
          >
            <Text style={[styles.buttonText, { color: textColor }]}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
            onPress={() => handleNumberInput(9)}
          >
            <Text style={[styles.buttonText, { color: textColor }]}>9</Text>
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
            style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
            onPress={() => handleNumberInput(4)}
          >
            <Text style={[styles.buttonText, { color: textColor }]}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
            onPress={() => handleNumberInput(5)}
          >
            <Text style={[styles.buttonText, { color: textColor }]}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
            onPress={() => handleNumberInput(6)}
          >
            <Text style={[styles.buttonText, { color: textColor }]}>6</Text>
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
                style={[
                  styles.button,
                  { backgroundColor: buttonBackgroundColor },
                ]}
                onPress={() => handleNumberInput(1)}
              >
                <Text style={[styles.buttonText, { color: textColor }]}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: buttonBackgroundColor },
                ]}
                onPress={() => handleNumberInput(2)}
              >
                <Text style={[styles.buttonText, { color: textColor }]}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: buttonBackgroundColor },
                ]}
                onPress={() => handleNumberInput(3)}
              >
                <Text style={[styles.buttonText, { color: textColor }]}>3</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.actionButton} onPress={ClearAll}>
                <Text style={styles.buttonText}>AC</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: buttonBackgroundColor },
                ]}
                onPress={() => handleNumberInput(0)}
              >
                <Text style={[styles.buttonText, { color: textColor }]}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: buttonBackgroundColor },
                ]}
              >
                <Text style={[styles.buttonText, { color: textColor }]}>.</Text>
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
    fontSize: 18,
  },
  resultText: {
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
