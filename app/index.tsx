import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

// Function to determine background color based on type
const getBackgroundColorByType = (type) => {
  if (type.includes("Electric")) return "#FFF85D";
  if (type.includes("Grass")) return "#A8E6A3";
  if (type.includes("Fairy")) return "#F8D5E2";
  if (type.includes("Psychic")) return "#F8A8FF";
  if (type.includes("Dragon")) return "#B8B8FF";
  if (type.includes("Poison")) return "#CBA5E0";
  if (type.includes("Steel")) return "#D6D6D6";
  if (type.includes("Fighting")) return "#FFC5B5";
  if (type.includes("Fire")) return "#FFB347";
  if (type.includes("Water")) return "#A3D5FF";
  if (type.includes("Ground")) return "#E2C290";
  if (type.includes("Flying")) return "#C3E4FA";
  return "#CED4F5";
};

// Pokémon data
const pokemonData = [
  {
    name: "Raikou",
    hp: 100,
    image: require("@/assets/images/123.png"),
    type: "⚡Electric",
    moves: ["Thunderbolt", "Thunder", "Volt Tackle", "Quick Attack", "Iron Tail", "Nuzzle"],
    weakness: "Ground",
  },
  {
    name: "Celebi",
    hp: 99,
    image: require("@/assets/images/1234.png"),
    type: "🐉Grass/Dragon",
    moves: ["Leaf Blade", "Solarbeam", "Energy Ball", "Dragon Rush"],
    weakness: "Ice-type attacks, Fire-type",
  },
  {
    name: "Mewtwo",
    hp: 79,
    image: require("@/assets/images/150.png"),
    type: "🧚 Fairy/Psychic",
    moves: ["Hyper Voice", "Psychic", "Psyshock", "Shadow Ball"],
    weakness: "Ghost, Steel, Poison, Dark",
  },
  {
    name: "Shaymin",
    hp: 99,
    image: require("@/assets/images/160.png"),
    type: "🍃 Grass/Poison",
    moves: ["Giga Drain", "Poison Fang", "Leech Seed"],
    weakness: "Flying, Psychic",
  },
  {
    name: "Mesprit",
    hp: 80,
    image: require("@/assets/images/170.png"),
    type: "🧚 Steel/Fairy",
    moves: ["Hyperbeam", "Psycho Ball", "Sucker Punch", "Swords Dance"],
    weakness: "Ground, Fire",
  },
  {
    name: "Keldeo",
    hp: 70,
    image: require("@/assets/images/180.png"),
    type: "⚔️ Steel/Fighting",
    moves: ["Shadow Ball", "Sucker Punch", "Iron Tail", "Hyperbeam", "Flash Cannon"],
    weakness: "Ground, Fire, Fighting",
  },
];

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pokemonData.map((pokemon, index) => (
        <View
          key={index}
          style={[styles.card, { backgroundColor: getBackgroundColorByType(pokemon.type) }]}
        >
          <View style={styles.header}>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Text style={styles.hp}>❤️ HP: {pokemon.hp}</Text>
          </View>

          <Image source={pokemon.image} style={styles.image} resizeMode="contain" />

          <View style={[styles.typeBadge, { borderColor: "#2020B3" }]}>
            <Text style={[styles.typeText, { color: "#2020B3" }]}>{pokemon.type}</Text>
          </View>

          <Text style={styles.sectionLabel}>Moves:</Text>
          <View style={styles.moveContainer}>
            {pokemon.moves.map((move, idx) => (
              <View key={idx} style={styles.moveBox}>
                <Text style={styles.moveText}>{move}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionLabel}>Weakness:</Text>
          <Text style={styles.sectionText}>{pokemon.weakness}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 16,
    color: "red",
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: 160,
    marginVertical: 12,
    borderRadius: 21,
  },
  typeBadge: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  typeText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  sectionLabel: {
    fontWeight: "bold",
    marginTop: 4,
  },
  sectionText: {
    marginBottom: 8,
  },
  moveContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 8,
    marginTop: 4,
  },
  moveBox: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 6,
    marginBottom: 6,
  },
  moveText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#333",
  },
});
