"use client"
import React, { useEffect, useState } from 'react'

export default function CountryLookup() {
    const [country, setCountry] = useState("United States")
    useEffect(() => {
        fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => setCountry(data.country_name));
    }, []);

  return (
    <div>
        {country}
    </div>
  )
}
