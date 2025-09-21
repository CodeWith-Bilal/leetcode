// You have a movie renting company consisting of n shops. You want to implement a renting system that supports searching for, booking, and returning movies. The system should also support generating a report of the currently rented movies.

// Each movie is given as a 2D integer array entries where entries[i] = [shopi, moviei, pricei] indicates that there is a copy of movie moviei at shop shopi with a rental price of pricei. Each shop carries at most one copy of a movie moviei.

// The system should support the following functions:

// Search: Finds the cheapest 5 shops that have an unrented copy of a given movie. The shops should be sorted by price in ascending order, and in case of a tie, the one with the smaller shopi should appear first. If there are less than 5 matching shops, then all of them should be returned. If no shop has an unrented copy, then an empty list should be returned.
// Rent: Rents an unrented copy of a given movie from a given shop.
// Drop: Drops off a previously rented copy of a given movie at a given shop.
// Report: Returns the cheapest 5 rented movies (possibly of the same movie ID) as a 2D list res where res[j] = [shopj, moviej] describes that the jth cheapest rented movie moviej was rented from the shop shopj. The movies in res should be sorted by price in ascending order, and in case of a tie, the one with the smaller shopj should appear first, and if there is still tie, the one with the smaller moviej should appear first. If there are fewer than 5 rented movies, then all of them should be returned. If no movies are currently being rented, then an empty list should be returned.
// Implement the MovieRentingSystem class:

// MovieRentingSystem(int n, int[][] entries) Initializes the MovieRentingSystem object with n shops and the movies in entries.
// List<Integer> search(int movie) Returns a list of shops that have an unrented copy of the given movie as described above.
// void rent(int shop, int movie) Rents the given movie from the given shop.
// void drop(int shop, int movie) Drops off a previously rented movie at the given shop.
// List<List<Integer>> report() Returns a list of cheapest rented movies as described above.
// Note: The test cases will be generated such that rent will only be called if the shop has an unrented copy of the movie, and drop will only be called if the shop had previously rented out the movie.

#include <bits/stdc++.h>
using namespace std;

struct PairHash {
    size_t operator()(const pair<int,int>& p) const {
        return hash<long long>()(((long long)p.first << 32) ^ p.second);
    }
};

class MovieRentingSystem {
private:
    unordered_map<pair<int,int>, int, PairHash> priceMap; 
    unordered_map<int, set<pair<int,int>>> available;       
    set<tuple<int,int,int>> rented;                         

public:
    MovieRentingSystem(int n, vector<vector<int>>& entries) {
        for (auto &e : entries) {
            int shop = e[0], movie = e[1], price = e[2];
            priceMap[{shop, movie}] = price;
            available[movie].insert({price, shop});
        }
    }

    vector<int> search(int movie) {
        vector<int> res;
        if (available.count(movie)) {
            auto &s = available[movie];
            int cnt = 0;
            for (auto &p : s) {
                if (cnt == 5) break;
                res.push_back(p.second);
                cnt++;
            }
        }
        return res;
    }

    void rent(int shop, int movie) {
        int price = priceMap[{shop, movie}];
        available[movie].erase({price, shop});
        rented.insert({price, shop, movie});
    }

    void drop(int shop, int movie) {
        int price = priceMap[{shop, movie}];
        rented.erase({price, shop, movie});
        available[movie].insert({price, shop});
    }

    vector<vector<int>> report() {
        vector<vector<int>> res;
        int cnt = 0;
        for (auto &t : rented) {
            if (cnt == 5) break;
            int price, shop, movie;
            tie(price, shop, movie) = t;
            res.push_back({shop, movie});
            cnt++;
        }
        return res;
    }
};
