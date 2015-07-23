# Using Data in Web Design

#### Data-driven Webstites are Everywhere

Examine the following:

- Instagram.com .... View Source, look at the JSON toward the bottom of the source.


#### Modeling Data

Within the scope of this class, we'll be passing data back and forth (reading/writing files, client/server, etc) in the form of strings. Converting between the string representation of data and alternate representations (numbers, JSON, etc). is a major consideration.

**Data Modeling** involves devising a data structure to maintain and organize the relevant information for your app. 

**Activity**: Use three different formats (data.csv, data.xml, data.json) to model a mailing address. Create at least two mailing addresses for each file. 


#### Tiered Activity: Make a Data-Driven Website

1) **Activity #1**: Data Sanitizing. Design an object-model for the data located in "Census_Data_All.cvs". Load data from the file "Census_Data_All.csv" and save this data as an array of JSON objects. Save this "structured" version of the data as "Census_Data_All.json".  (Check out http://www.census.gov/developers/ for the original data)

2) **Activity #2**: Data-driven Website Creation. Output a 52-page website "report" that auto-generates an html page for every state  and an "index.html" page to organize them all. 

  The "index.html" page should include a link to each state page. 

  Each state page (and DC) should include:

   - Data concerning the increase/decrease in total population
   - Data concerning the increase/decrease in renter population
   - A state-specific title
   - A link to "index.html"
   - A link to the same css stylesheet

  Bonus Options: 
     1. A link to the wikipedia article for each state. 
     2. Embed the state flag for each state.
     3. Output a varying text-based qualitative description of the change from 2000 - 2010 (ie - "huge increase", "slight decrease", etc)
     4. A link to the next and previous states (alphabetically ordered)
     5. Use for loops to organize your links on "index.html" into a 4-column table

  Super Bonus: 
     1. Use svg images to dynamically create bar graphs


#### Data-driven Webstites are Usually Generated Dynamically

Check out Zillow.com. Would this teechnique be appropriate for Zillow.com? No. Why not? 
