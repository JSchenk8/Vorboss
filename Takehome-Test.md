# 🏡 Takehome Task: Asset Management 🏡 

## 🚀 Introduction 🚀 

At Vorboss, we manage the end-to-end provisioning of a fibre connection:

* From the customer placing an order
* Through the planning process of where to lay fibre 
* Picking the required tools and equipment from the warehouse 
* Loading engineer vans
* Assgining engineers 
* Laying the fibre 
* Network management ...

... All the way to our customer seeing their first successful Google search served by Vorboss! 🚀🚀🚀

This requires a considerable amount of tooling and data management, owned by us, the Systems Engineering Team, and soon; by you! 👩‍🚀

## 👀 The Challenge 👀

One of the most powerful tools we use to reduce our team being a bottleneck to others is [Airtable](https://airtable.com/), which allows us to build prototyped tools quickly, without writing a single line of code. When Airtable becomes a limitation, we use the prototype to build real applications. 

Today, we have a system built in Airtable for tracking our physical tools that currently:

* Maintains a list of our standard tools, with a description and the minimum number we want available for use before considering buying more
* Includes a ledger of tools against asset tags (barcoded for scanning in the warehouse)

We need to create a simple internal microsite that uses the Airtable API to show us:

* Which tools we should consider re-ordering immediately
* Any tools that have been lost / are missing

This microsite will be used by two separate teams:

* The procurement team, who will be responsible for placing orders for restocking
* The Installations team, to track down any tools lost by Engineers

## Rules & Notes 🙌

* Do not attempt to use Airtable views for this; please create a web app that calls the Airtable API
* Fork this repo into your own account, commit your code there, then invite Aaron to that repo when you're ready for review.
* Please document & comment your code
* Feel free to use any language you are comfortable in, but provide it in such a way that your reviewer can easily start and run the application on our local computer

🎉🎉 Good luck, you GOT this! 🎉🎉
