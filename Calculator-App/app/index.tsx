import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.displayContainer}>
        <Text style={styles.historyText}>120 x 3 + 608 + 1080</Text>
        <Text style={styles.resultText}>2,048</Text>
      </View>

      {/* Keypad */}
      <View style={styles.keypadContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>🔆</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>━</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <View style={styles.lastRowContainer}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>3</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.buttonText}>AC</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>.</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity>
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
