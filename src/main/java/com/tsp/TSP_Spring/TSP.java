package com.tsp.TSP_Spring;

import java.util.*;
import java.util.ArrayList;
import java.util.List;

public class TSP {
    public ReadCoOrdinates readCoOrdinates = new ReadCoOrdinates();

    public double graph[][] = readCoOrdinates.readGraphFromFile("teamproject.csv");

    // method for backend run only
    public void tspBackend() {

        List<double[]> coOrdinates = readCoOrdinates.getCoOrdinates();

        List<String> crimeIDs = readCoOrdinates.getCrimeIDs();

        double distance = 0.0;

        System.out.println("MST Tour Start..");
        MST mst = new MST();
        mst.primMST(graph);
        System.out.println("MST Tour Ended..");

        System.out.println("Christofides Tour Start");
        int[] christofidesSolution = Christofides.applyChristofidesAlgorithm(graph);
        List<Integer> christofidesList = new ArrayList<>();
        for (int i = 0; i < christofidesSolution.length; i++) {
            christofidesList.add(christofidesSolution[i]);
            System.out.print("Crime ID: " + crimeIDs.get(i));
            System.out.print(", Latitide: " + coOrdinates.get(i)[1]);
            System.out.print(", Longitude: " + coOrdinates.get(i)[0]);
            System.out.println();
        }

        distance = TourDistance.tourDistance(christofidesList, graph);
        System.out.println("\nTotal distance w Christofides: " + distance * 1000);
        System.out.println("Christofides Tour Ended..");

        System.out.println("Two-Opt Tour Start..");
        int[] newTour = TwoOpt.twoOpt(christofidesSolution, graph);
        List<Integer> twoOptNewList = new ArrayList<>();
        for (int i = 0; i < newTour.length; i++) {
            twoOptNewList.add(newTour[i]);
            System.out.print("Crime ID: " + crimeIDs.get(i));
            System.out.print(", Latitide: " + coOrdinates.get(i)[1]);
            System.out.print(", Longitude: " + coOrdinates.get(i)[0]);
            System.out.println();
        }
        System.out.println("2-opt distance=" + TourDistance.tourDistance(twoOptNewList, graph));
        System.out.println("Two-opt Tour Ended..");

    }
}
