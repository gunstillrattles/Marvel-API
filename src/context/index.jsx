import { API } from "../services";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import React from "react";

export const MarvelContext = createContext();

export const MarvelProvider = ({ children }) => {
  const search = async (name) => {
    const response = await API.get(
      `characters?nameStartsWith=${name}&ts=1&apikey=2de8e495acd54e69006145214e68b546&hash=9420a1d0a523afa86ef8ffbf37fc4e2b&limit=99`
    );
    return response;
  };

  const getChar = async (id) => {
    const response = await API.get(
      `characters/${id}?ts=1&apikey=2de8e495acd54e69006145214e68b546  &hash=9420a1d0a523afa86ef8ffbf37fc4e2b`
    );
    return response;
  };

  const getComics = async (id) => {
    const response = await API.get(
      `characters/${id}/comics?ts=1&apikey=2de8e495acd54e69006145214e68b546&hash=9420a1d0a523afa86ef8ffbf37fc4e2b&limit=99`
    );
    return response;
  };

  const getSeries = async (id) => {
    const response = await API.get(
      `characters/${id}/series?seriesType=collection&ts=1&apikey=2de8e495acd54e69006145214e68b546&hash=9420a1d0a523afa86ef8ffbf37fc4e2b&limit=99`
    );
    return response;
  };

  const value = useMemo(() => ({
    search,
    getComics,
    getSeries,
    getChar,
  }));
  return (
    <MarvelContext.Provider value={value}>{children}</MarvelContext.Provider>
  );
};
export const useMarvel = () => useContext(MarvelContext);
