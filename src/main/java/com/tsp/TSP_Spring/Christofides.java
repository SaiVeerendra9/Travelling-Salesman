package com.tsp.TSP_Spring;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Stack;

public class Christofides {
    public static int[] applyChristofidesAlgorithm(double[][] graph) {
        // Find the minimum spanning tree
        double[][] minimumSpanningTree = findMinimumSpanningTree(graph);

        // Identify odd-degree vertices in the minimum spanning tree
        List<Integer> oddDegreeVertices = identifyOddDegreeVertices(minimumSpanningTree);

        // Find a perfect matching for odd-degree vertices
        double[][] perfectMatching = findPerfectMatching(graph, oddDegreeVertices);

    }

    public static double[][] findMinimumSpanningTree(double[][] graph) {
        int numVertices = graph.length;
        double[][] minimumSpanningTree = new double[numVertices][numVertices];

        // Initialize the minimum spanning tree with all zeros
        for (int i = 0; i < numVertices; i++) {
            for (int j = 0; j < numVertices; j++) {
                minimumSpanningTree[i][j] = 0;
            }
        }

        // Keep track of vertices included in the minimum spanning tree
        boolean[] included = new boolean[numVertices];

        // Choose the starting vertex (e.g., vertex 0)
        included[0] = true;

        // Perform Prim's algorithm
        for (int count = 0; count < numVertices - 1; count++) {
            double minWeight = Double.MAX_VALUE;
            int u = -1;
            int v = -1;

            // Find the minimum weight edge from included vertices to non-included vertices
            for (int i = 0; i < numVertices; i++) {
                if (included[i]) {
                    for (int j = 0; j < numVertices; j++) {
                        if (!included[j] && graph[i][j] > 0 && graph[i][j] < minWeight) {
                            minWeight = graph[i][j];
                            u = i;
                            v = j;
                        }
                    }
                }
            }

            // Include the vertex with the minimum weight edge
            included[v] = true;

            // Add the edge to the minimum spanning tree
            minimumSpanningTree[u][v] = minWeight;
            minimumSpanningTree[v][u] = minWeight;
        }

        return minimumSpanningTree;
    }

    public static List<Integer> identifyOddDegreeVertices(double[][] minimumSpanningTree) {
        List<Integer> oddDegreeVertices = new ArrayList<>();
        int numVertices = minimumSpanningTree.length;

        for (int i = 0; i < numVertices; i++) {
            int degree = 0;
            for (int j = 0; j < numVertices; j++) {
                degree += minimumSpanningTree[i][j];
            }

            if (degree % 2 != 0) {
                oddDegreeVertices.add(i);
            }
        }

        return oddDegreeVertices;
    }

public static double[][] findPerfectMatching(double[][] graph, List<Integer> oddDegreeVertices) {
    int numVertices = graph.length;
    double[][] perfectMatching = new double[numVertices][numVertices]; //
    // Initialize perfect matching as all zeros

    // Logic to find a perfect matching, such as using a greedy approach,
    // Edmonds' blossom algorithm, or other matching algorithms
    // Here, we use a simple greedy approach to match the odd-degree vertices

    // Sort the odd-degree vertices in ascending order of their degree
    oddDegreeVertices.sort(Comparator.comparingInt(v -> getDegree(graph, v)));

    // Match the odd-degree vertices greedily
    for (int i = 0; i < oddDegreeVertices.size(); i += 2) {
        int u = oddDegreeVertices.get(i);
        int v = oddDegreeVertices.get(i + 1);
        perfectMatching[u][v] = 1;
        perfectMatching[v][u] = 1;
    }

    return perfectMatching;
}