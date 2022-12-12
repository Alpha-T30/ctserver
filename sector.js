const sectors = [
  {
    name: "Manufacturing",
    val: "1",
    subsectors: [
      {
        val: "19",
        presector: "1",
        name: "Construction materials",
        subsubsectors: [],
      },
      {
        val: "5",
        presector: "1",
        name: "Printing",
        subsubsectors: [
          {
            val: "148",
            presector: "5",
            name: "Advertising",
            subsubsubsectors: [],
          },
          {
            val: "150",
            presector: "5",
            name: "Book/Periodicals printing",
            subsubsubsectors: [],
          },
          {
            val: "145",
            presector: "5",
            name: "Labelling and packaging printing",
            subsubsubsectors: [],
          },
        ],
      },
      {
        val: "7",
        presector: "1",
        name: "Textile and Clothing",
        subsubsectors: [
          {
            val: "44",
            presector: "7",
            name: "Clothing",
            subsubsubsectors: [],
          },
          {
            val: "45",
            presector: "7",
            name: "Textile",
            subsubsubsectors: [],
          },
        ],
      },
      {
        val: "8",
        presector: "1",
        name: "Wood",
        subsubsectors: [
          {
            val: "337",
            presector: "8",
            name: "Other (Wood",
            subsubsubsectors: [],
          },
          {
            val: "51",
            presector: "8",
            name: "Wooden building materials",
            subsubsubsectors: [],
          },
          {
            val: "47",
            presector: "8",
            name: "Wooden houses",
            subsubsubsectors: [],
          },
        ],
      },
      {
        val: "9",
        presector: "1",
        name: "Plastic and Rubber",
        subsubsectors: [
          {
            presector: "9",
            val: "54",
            name: "Packaging",
            subsubsubsectors: [],
          },
          {
            presector: "9",
            val: "556",
            name: "Plastic goods",
            subsubsubsectors: [],
          },
          {
            presector: "9",
            val: "559",
            name: "Plastic processing technology",
            subsubsubsectors: [
              {
                presector: "559",
                val: "55",
                name: "Blowing",
              },
              {
                presector: "559",
                val: "57",
                name: "Moulding",
              },
              {
                presector: "559",
                val: "53",
                name: "Plastics welding and processing",
              },
            ],
          },
          {
            presector: "9",
            val: "560",
            name: "Plastic profiles",
            subsubsubsectors: [],
          },
        ],
      },
      {
        val: "13",
        presector: "1",
        name: "Furniture",
        subsubsectors: [
          {
            val: "389",
            presector: "13",
            name: "Bathroom/sauna",
            subsubsubsectors: [],
          },
          {
            val: "385",
            presector: "13",
            name: "Bedroom",
            subsubsubsectors: [],
          },
          {
            val: "390",
            presector: "13",
            name: "Children’s room",
            subsubsubsectors: [],
          },
          {
            val: "98",
            presector: "13",
            subsubsubsectors: [],
            name: "Kitchen",
          },
          {
            val: "101",
            presector: "13",
            name: "Living room",
            subsubsubsectors: [],
          },
          {
            val: "392",
            presector: "13",
            name: "Office",
            subsubsubsectors: [],
          },
          {
            val: "394",
            presector: "13",
            name: "Other (Furniture)",
            subsubsubsectors: [],
          },
          {
            val: "341",
            presector: "13",
            subsubsubsectors: [],
            name: "Outdoor",
          },
          {
            val: "99",
            presector: "13",
            subsubsubsectors: [],
            name: "Project furniture",
          },
        ],
      },
      {
        val: "11",
        name: "Metalworking",
        presector: "1",
        subsubsectors: [
          {
            name: "Construction of metal structures",
            val: "67",

            presector: "11",
            subsubsubsectors: [],
          },
          {
            name: "Houses and buildings",
            subsubsubsectors: [],
            val: "263",

            presector: "11",
          },
          {
            name: "Metal products",
            subsubsubsectors: [],
            val: "267",

            presector: "11",
          },
          {
            name: "Metal works",
            val: "542",

            presector: "11",
            subsubsubsectors: [
              {
                presector: "542",
                val: "75",
                name: "CNC-machining",
              },
              {
                presector: "542",
                val: "62",
                name: "Forgings, Fasteners",
              },
              {
                presector: "542",
                val: "69",
                name: "Gas, Plasma, Laser cutting",
              },
              {
                presector: "542",
                val: "66",
                name: "MIG, TIG, Aluminum welding",
              },
            ],
          },
        ],
      },
      {
        val: "6",
        name: "Food and Beverage",
        presector: "1",
        subsubsectors: [
          {
            name: "Bakery & confectionery products",
            val: "342",

            presector: "6",
            subsubsubsectors: [],
          },
          {
            name: "Beverages",
            subsubsubsectors: [],
            val: "43",
            presector: "6",
          },
          {
            name: "Fish & fish products",
            subsubsubsectors: [],
            val: "42",
            presector: "6",
          },
          {
            name: "Meat & meat products",
            subsubsubsectors: [],
            val: "40",
            presector: "6",
          },
          {
            name: "Milk & dairy products",
            subsubsubsectors: [],
            val: "39",
            presector: "6",
          },
          {
            name: "Other",
            subsubsubsectors: [],
            val: "337",
            presector: "6",
          },
          {
            name: "Sweets & snack food",
            subsubsubsectors: [],
            val: "378",
            presector: "6",
          },
        ],
      },
      {
        val: "18",
        name: "Electronics and Optics",
        presector: "1",
        subsubsectors: [],
      },
      {
        name: "Machinery",
        val: "12",
        presector: "1",
        subsubsectors: [
          {
            val: "94",
            presector: "12",
            name: "Machinery components",
            subsubsubsectors: [],
          },
          {
            val: "91",
            presector: "12",
            name: "Machinery equipment/tools",
            subsubsubsectors: [],
          },
          {
            val: "93",
            presector: "12",
            name: "Metal structures",
            subsubsubsectors: [],
          },
          {
            val: "508",
            presector: "12",
            name: "Other",
            subsubsubsectors: [],
          },
          {
            val: "227",
            presector: "12",
            name: "Repair and maintenance service",
            subsubsubsectors: [],
          },

          {
            name: "Maritime",
            val: "97",
            presector: "12",
            subsubsubsectors: [
              {
                name: "Aluminium and steel workboats",
                val: "271",
                presector: "97",
                subsubsubsectors: [],
              },
              {
                name: "Boat/Yacht building",
                val: "269",
                presector: "97",
                subsubsubsectors: [],
              },
              {
                name: "Ship repair and conversion",
                val: "230",
                presector: "97",
                subsubsubsectors: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Other",
    val: "2",
    subsectors: [
      {
        name: "Creative industries",
        val: "37",
        presector: "2",
        subsubsectors: [],
      },
      {
        name: "Energy technology",
        presector: "2",
        val: "29",
        subsubsectors: [],
      },
      {
        name: "Environment",
        presector: "2",
        val: "33",
        subsubsectors: [],
      },
    ],
  },
  {
    name: "Service",
    val: "3",
    subsectors: [
      {
        name: "Business services",
        val: "25",
        presector: "3",
        subsubsectors: [],
      },
      {
        name: "Engineering",
        val: "35",
        subsubsectors: [],
        presector: "3",
      },
      {
        name: "Information Technology and Telecommunications",
        val: "28",
        subsubsectors: [
          {
            val: "581",
            presector: "28",
            name: "Data processing, Web portals, E-marketing",
            subsubsubsectors: [],
          },
          {
            val: "576",
            presector: "28",
            name: "Programming, Consultancy",
            subsubsubsectors: [],
          },
          {
            val: "121",
            presector: "28",
            name: "Software, Hardware",
            subsubsubsectors: [],
          },
          {
            val: "122",
            presector: "28",
            name: "Telecommunications",
            subsubsubsectors: [],
          },
        ],
        presector: "3",
      },
      {
        name: "Tourism",
        val: "22",
        subsubsectors: [],

        presector: "3",
      },
      {
        name: "Translation services",
        val: "141",

        presector: "3",
        subsubsectors: [],
      },
      {
        name: "Transport and Logistics",
        val: "21",
        subsubsectors: [
          { name: "Air", val: "111", presector: "21", subsubsubsectors: [] },
          { name: "Rail", val: "114", presector: "21", subsubsubsectors: [] },
          { name: "Road", val: "112", presector: "21", subsubsubsectors: [] },
          { name: "Water", val: "113", presector: "21", subsubsubsectors: [] },
        ],
        presector: "3",
      },
    ],
  },
];

module.exports = Object.freeze({
  sectors: sectors,
});
