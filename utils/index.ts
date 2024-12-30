"use client"
import { useEffect } from "react";

const fetchJobsData = async () => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            'x-rapidapi-key': 'ae8d21032fmshc8099f1f00fbd2ep1cce1ejsn52971e197118',
            'x-rapidapi-host': 'linkedin-jobs-api2.p.rapidapi.com'
        }
    };

    fetch("'https://linkedin-jobs-api2.p.rapidapi.com/active-jb-7d", options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.error("Error:", err);
        });
}

useEffect(() => {
    fetchJobsData();
}, [fetchJobsData])



const url = 'https://linkedin-job-search-api.p.rapidapi.com/active-jb-7d?title_filter=Indonesia';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'ae8d21032fmshc8099f1f00fbd2ep1cce1ejsn52971e197118',
        'x-rapidapi-host': 'linkedin-job-search-api.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}