import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../item_list/ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
const ItemListContainer = () => {
  const [listProducts, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    const filterPrdoduct = category
      ? query(queryCollection, where("category", "==", category))
      : queryCollection;

    getDocs(filterPrdoduct).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
  }, [category]);

  return <div className="container"></div>;
};

export default ItemListContainer;
