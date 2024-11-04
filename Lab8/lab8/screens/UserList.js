import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/actions/userActions";

const UserList = ({ users, loading, error, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userEmail}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
  },
  error: {
    color: "red",
    fontSize: 16,
  },
});

const mapStateToProps = (state) => ({
  users: state.users.users,
  loading: state.users.loading,
  error: state.users.error,
});

export default connect(mapStateToProps, { fetchUsers })(UserList);
