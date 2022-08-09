import { gql, useQuery } from "@apollo/client";
import { View, Text } from "react-native";

const CUSTOMERS = gql`
  query Query {
    customer(id: 1) {
      id
      phone
      name
    }
  }
`;

const CustomerData = () => {
  const { loading, error, data } = useQuery(CUSTOMERS);

  if (loading) return <Text>"Loading..."</Text>;

  if (error) return <Text>`Error! ${error.message}`</Text>;

  return <Text>{JSON.stringify(data)}</Text>;
};

export default CustomerData;
