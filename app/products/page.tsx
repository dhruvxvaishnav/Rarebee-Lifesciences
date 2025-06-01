"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Pill, Droplets, Package } from "lucide-react";

interface Product {
  sr: number;
  brandName: string;
  composition: string;
  packing: string;
  category: string;
  type: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>(["All"]);

  // Mock data from your Excel file - replace with actual data
  const mockProducts = [
    {
      sr: 1,
      brandName: "Rareclave 625",
      composition: "Amoxycillian 500 mg + Clavulanic Acid 125 mg",
      packing: "1X10",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 2,
      brandName: "Rareclav",
      composition: "Amoxycillin 200 mg + Potassium Clav 28.5 mg",
      packing: "30 ML",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 3,
      brandName: "Rareclav DS",
      composition: "Amoxycillin 400 mg + Potassium Clav 57 mg",
      packing: "30 ML",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 4,
      brandName: "Rarefixx 200 LB",
      composition: "Cefixime 200 mg + Lactic Acid Bacillus 60 million",
      packing: "10X10",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 5,
      brandName: "Rarefixx O",
      composition: "Cefixime 200 mg + Ofloxacin 200 mg",
      packing: "10X10",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 6,
      brandName: "Rarefixx CV",
      composition: "Cefixime 200 mg + Clavulanic Acid 125 mg ",
      packing: "10X1X10",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 7,
      brandName: "Raredon 200",
      composition: "Cefpodoxime Proxetil 200 mg ",
      packing: "10X10",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 8,
      brandName: "Raredon CV",
      composition: "Cefpodoxime Proxetil 200 mg + Clavulanic Acid 125 mg",
      packing: "10X1X10",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 9,
      brandName: "Raredon",
      composition: "Cefpodoxime Proxetil 50 mg",
      packing: "30 ML",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 10,
      brandName: "Raredon DS",
      composition: "Cefpodoxime Proxetil 100 mg",
      packing: "30 ML",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 11,
      brandName: "Rareazee 250",
      composition: "Azithromycin 250 mg",
      packing: "10X6",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 12,
      brandName: "Rareazee 500",
      composition: "Azithromycin 500 mg",
      packing: "10X5",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 13,
      brandName: "Rarelid 600",
      composition: "Linezolid 600 mg",
      packing: "10X10",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 14,
      brandName: "Itrobee 100",
      composition: "Itraconazole 100 mg",
      packing: "10X1X10",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 15,
      brandName: "Itrobee 200",
      composition: "Itraconazole 200 mg",
      packing: "10X1X10",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 16,
      brandName: "Cefurare 500",
      composition: "Cefuroxime 500 mg",
      packing: "10X1X10",
      category: "ANTIBIOTICS/ANTIBACTERIAL",
    },
    {
      sr: 17,
      brandName: "Rareclo P",
      composition: "Aceclofenac 100 mg + Paracetamol 325 mg",
      packing: "20X10",
      category: "ANTI-INFLAMMATORY/ANALGESTIC",
    },
    {
      sr: 18,
      brandName: "Rareclo SP",
      composition:
        "Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 15 mg",
      packing: "10X10",
      category: "ANTI-INFLAMMATORY/ANALGESTIC",
    },
    {
      sr: 19,
      brandName: "Rarecold",
      composition:
        "Aceclofenac 100 mg + Paracetamol 325 mg + Cetirizine 10 mg + Phenylephrine 5 mg + Caffeine 25 mg",
      packing: "20X10",
      category: "ANTI-INFLAMMATORY/ANALGESTIC",
    },
    {
      sr: 20,
      brandName: "Raredic",
      composition: "Diclofenac 50 mg + Paracetamol 325 mg",
      packing: "20X10",
      category: "ANTI-INFLAMMATORY/ANALGESTIC",
    },
    {
      sr: 21,
      brandName: "Rarenim P",
      composition: "Nimusulide 100 mg + Paracetamol 325 mg",
      packing: "20X10",
      category: "ANTI-INFLAMMATORY/ANALGESTIC",
    },
    {
      sr: 22,
      brandName: "Parabee 650",
      composition: "Paracetamol 650 mg",
      packing: "15X10",
      category: "ANTI-INFLAMMATORY/ANALGESTIC",
    },
    {
      sr: 23,
      brandName: "Rareprox 250",
      composition: "Naproxen 250 mg",
      packing: "10X10",
      category: "ANTI-INFLAMMATORY/ANALGESTIC",
    },
    {
      sr: 24,
      brandName: "Rarepen DM",
      composition: "Pantoprazole 40 mg + Domperidone 10 mg",
      packing: "10X10",
      category: "PPI/ANTACID",
    },
    {
      sr: 25,
      brandName: "Rarepen DSR",
      composition: "Pantoprazole 40 mg + Domperidone 30 mg",
      packing: "10X10",
      category: "PPI/ANTACID",
    },
    {
      sr: 26,
      brandName: "Rarerab DSR",
      composition: "Rabeprazole 20 mg + Domperidone 30 mg",
      packing: "10X10",
      category: "PPI/ANTACID",
    },
    {
      sr: 27,
      brandName: "Esmorare 40",
      composition: "Esomeprazole 40 mg (with sodium bicarbonate as buffer)",
      packing: "10X10",
      category: "PPI/ANTACID",
    },
    {
      sr: 28,
      brandName: "Rarecort 6",
      composition: "Deflazacort 6 mg",
      packing: "10X10",
      category: "ANTI ALLERGIC/EXPECTORANT",
    },
    {
      sr: 29,
      brandName: "Rarecet LM",
      composition: "Lovocetrizine 5 mg + Montelukast 10 mg",
      packing: "10X10",
      category: "ANTI ALLERGIC/EXPECTORANT",
    },
    {
      sr: 30,
      brandName: "Bilanova M",
      composition: "Bilastine 20 mg + Montelukast 10 mg",
      packing: "10X10",
      category: "ANTI ALLERGIC/EXPECTORANT",
    },
    {
      sr: 31,
      brandName: "Doxipie OD",
      composition: "Doxylamine 20 mg + Pyridoxine 20 mg + Folic Acid 5 mg",
      packing: "10X10",
      category: "GYNEC",
    },
    {
      sr: 32,
      brandName: "Rarezex SR",
      composition: "Isoxsuprine 40 mg (SR)",
      packing: "10X10",
      category: "GYNEC",
    },
    {
      sr: 33,
      brandName: "Notirare NT",
      composition:
        "Pregabaline 75 mg + Methylcobalamin 1500 mcg + Nortiptyline 10 mg",
      packing: "10X10",
      category: "NUTRITIONAL/VITAMINS",
    },
    {
      sr: 34,
      brandName: "Rarecal D3",
      composition:
        "Methylcobalamin 1500 mcg + pyridoxine 20 mg + folic acid 5 mg + vitamin D3 1000 IU",
      packing: "10X10",
      category: "NUTRITIONAL/VITAMINS",
    },
    {
      sr: 35,
      brandName: "Rare Z",
      composition: "Energy Drink (3 flavour - mango,orange,gawa)",
      packing: "105 GM",
      category: "NUTRITIONAL/VITAMINS",
    },
    {
      sr: 36,
      brandName: "Zizzbee",
      composition: "Melatonin 5 mg (Sleeping Spray)",
      packing: "Oral Spray",
      category: "NUTRITIONAL/VITAMINS",
    },
    {
      sr: 37,
      brandName: "Rarenac Gel",
      composition: `Diclofenac Sodium 1 % w/w +
Methyl salicylate 10 % w/w +
Linseed Oil 3 % w/w +
Menthol Gel 0.5 % w/w`,
      packing: "30 gm",
      category: "OINTMENT",
    },
    {
      sr: 38,
      brandName: "Rarecof",
      composition: "Dextromethorphan 15 mg + CPM 2 mg + Phenylephrine 5 mg",
      packing: "100 ML",
      category: "LIQUID",
    },
    {
      sr: 39,
      brandName: "Ambrobee",
      composition: "Ambroxol 15 mg + Terbutaline 1.125 mg + Guaiphenesin 50 mg",
      packing: "100 ML",
      category: "LIQUID",
    },
    {
      sr: 40,
      brandName: "Rareterb",
      composition:
        "Terbutaline 1.12 mg + Guaiphenesin 50 mg + Bromhexine 2 mg + Menthol 2.5 mg",
      packing: "100 ML",
      category: "LIQUID",
    },
    {
      sr: 41,
      brandName: "Rareambro LS",
      composition:
        "Levosalbutamol 1 mg + Ambroxol Hydrochloride 30 mg + Guaiphenesin 50 mg",
      packing: "60 ML",
      category: "LIQUID",
    },
    {
      sr: 42,
      brandName: "Rareambro LS",
      composition:
        "Levosalbutamol 1 mg + Ambroxol Hydrochloride 30 mg + Guaiphenesin 50 mg",
      packing: "100 ML",
      category: "LIQUID",
    },
    {
      sr: 43,
      brandName: "Parabee MF",
      composition: "Mefenamic Acid 100 mg + Paracetamol 250 mg",
      packing: "60 ML",
      category: "LIQUID",
    },
    {
      sr: 44,
      brandName: "Rarecold",
      composition:
        "Paracetamol 125 mg + Cetirizine 2.5 mg + Phenylephrine hcl 2.5 mg",
      packing: "60 ML",
      category: "LIQUID",
    },
    {
      sr: 45,
      brandName: "Parabee 250",
      composition: "Paracetamol 250 mg",
      packing: "60 ML",
      category: "LIQUID",
    },
    {
      sr: 46,
      brandName: "Iburare Kids",
      composition: "Ibuprofen 100 mg + Paracetamol 162.5 mg",
      packing: "60 ML",
      category: "LIQUID",
    },
    {
      sr: 47,
      brandName: "Irorare XT",
      composition:
        "Ferrus Asscorbate 30 mg + Zinc 22.5 mg + Folic Acid 500 mcg + Vitamin B12 1 mcg",
      packing: "200 ML",
      category: "LIQUID",
    },
    {
      sr: 48,
      brandName: "Rare-ezyme",
      composition: "Alpha-amylase 50 mg + Pepsin 10 mg + Carbohydrate 2.1 g",
      packing: "200 ML",
      category: "LIQUID",
    },
    {
      sr: 49,
      brandName: "Rarexone 1g",
      composition: "Ceftriaxone 1000 mg",
      packing: "VIAL & WFI",
      category: "INJECTIONS",
    },
    {
      sr: 50,
      brandName: "Rarexon S 1.5",
      composition: "Ceftriaxone 1000 mg + Sulbactam 500 mg",
      packing: "VIAL & WFI",
      category: "INJECTIONS",
    },
    {
      sr: 51,
      brandName: "Rarezone SB 1.5",
      composition: "Cefoperazone 1000 mg + Sulbactam 500 mg",
      packing: "VIAL & WFI",
      category: "INJECTIONS",
    },
    {
      sr: 52,
      brandName: "Rareclav 1.2",
      composition: "Amoxycillin 1000 mg + Clav 200 mg",
      packing: "VIAL & WFI",
      category: "INJECTIONS",
    },
    {
      sr: 53,
      brandName: "Rarepep 4.5",
      composition: "Piperacillin 4g + Tazobactam 500 mg",
      packing: "VIAL & WFI",
      category: "INJECTIONS",
    },
    {
      sr: 54,
      brandName: "Rarepen IV",
      composition: "Pantoprazole 40 mg",
      packing: "40 ML",
      category: "INJECTIONS",
    },
    {
      sr: 55,
      brandName: "Raredic AQ",
      composition: "Diclofenac Sodium 75 mg",
      packing: "1 ML",
      category: "INJECTIONS",
    },
    {
      sr: 56,
      brandName: "Rareron",
      composition: "Ondansetron 2 mg",
      packing: "2 ML",
      category: "INJECTIONS",
    },
    {
      sr: 57,
      brandName: "Rareron",
      composition: "Ondansetron 4 mg",
      packing: "4 ML",
      category: "INJECTIONS",
    },
    {
      sr: 58,
      brandName: "Rarecin 500",
      composition: "Amikacin 500 mg",
      packing: "500 MG",
      category: "INJECTIONS",
    },
    {
      sr: 59,
      brandName: "Rarexone 250 mg",
      composition: "Ceftriaxone 250 mg",
      packing: "VIAL & WFI",
      category: "INJECTIONS",
    },
    {
      sr: 60,
      brandName: "Rarexone 500 mg",
      composition: "Ceftriaxone 500 mg",
      packing: "VIAL & WFI",
      category: "INJECTIONS",
    },
    {
      sr: 61,
      brandName: "Esmorare 40",
      composition: "Esomeprazole Sodium 40 mg",
      packing: "VIAL & WFI",
      category: "INJECTIONS",
    },
  ];

  const getProductType = (packing: any) => {
    if (!packing) return "Other";
    if (packing.includes("ML") || packing.includes("ml")) return "Liquid";
    if (packing.includes("X")) return "Tablet/Capsule";
    return "Other";
  };

  const getTypeIcon = (type: any) => {
    switch (type) {
      case "Liquid":
        return <Droplets className="h-4 w-4 text-blue-600" />;
      case "Tablet/Capsule":
        return <Pill className="h-4 w-4 text-green-600" />;
      default:
        return <Package className="h-4 w-4 text-orange-600" />;
    }
  };

  useEffect(() => {
    // Simulate loading and process data
    setTimeout(() => {
      const productsWithTypes = mockProducts.map((product) => ({
        ...product,
        type: getProductType(product.packing),
      }));

      // Extract unique categories
      const uniqueCategories = [
        "All",
        ...new Set(mockProducts.map((p) => p.category)),
      ];

      setProducts(productsWithTypes);
      setFilteredProducts(productsWithTypes);
      setCategories(uniqueCategories);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, products]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9AA6B2] mx-auto mb-4"></div>
          <p className="text-[#9AA6B2] text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Product List
          </h1>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 border border-[#BCCCDC]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div className="relative md:col-start-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-[#BCCCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9EAFD] appearance-none bg-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "All" ? "All Categories" : category}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9AA6B2] h-5 w-5 pointer-events-none" />
            </div>
          </div>

          <div className="mt-3 text-sm text-[#9AA6B2]">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </div>

        {selectedCategory === "All" ? (
          // Group by category when showing all
          categories.slice(1).map((category, categoryIndex) => {
            const categoryProducts = filteredProducts.filter(
              (p) => p.category === category
            );
            if (categoryProducts.length === 0) return null;

            return (
              <div key={category} className={categoryIndex > 0 ? "mt-8" : ""}>
                {/* Category Header */}
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center bg-[#BCCCDC] py-3 rounded-lg">
                  {category}
                </h3>

                {/* Table for this category */}
                <div className="bg-white rounded-lg shadow-md border border-[#BCCCDC] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-[#D9EAFD] border-b border-[#BCCCDC]">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800 border-r border-[#BCCCDC]">
                            Sr No.
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800 border-r border-[#BCCCDC]">
                            Brand Name
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800 border-r border-[#BCCCDC]">
                            Composition
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">
                            Type
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {categoryProducts.map((product, index) => (
                          <tr
                            key={product.sr}
                            className={`hover:bg-[#F8FAFC] ${
                              index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            } border-b border-[#BCCCDC]`}
                          >
                            <td className="px-4 py-3 text-sm text-gray-800 border-r border-[#BCCCDC] font-medium">
                              {product.sr}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-800 border-r border-[#BCCCDC] font-medium">
                              {product.brandName}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-700 border-r border-[#BCCCDC]">
                              {product.composition}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-700">
                              <div className="flex items-center">
                                {getTypeIcon(product.type)}
                                <span className="ml-2">{product.type}</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          // Single table when specific category selected
          <div className="bg-white rounded-lg shadow-md border border-[#BCCCDC] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#D9EAFD] border-b border-[#BCCCDC]">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800 border-r border-[#BCCCDC]">
                      Sr No.
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800 border-r border-[#BCCCDC]">
                      Brand Name
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800 border-r border-[#BCCCDC]">
                      Composition
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr
                      key={product.sr}
                      className={`hover:bg-[#F8FAFC] ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } border-b border-[#BCCCDC]`}
                    >
                      <td className="px-4 py-3 text-sm text-gray-800 border-r border-[#BCCCDC] font-medium">
                        {product.sr}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-800 border-r border-[#BCCCDC] font-medium">
                        {product.brandName}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 border-r border-[#BCCCDC]">
                        {product.composition}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        <div className="flex items-center">
                          {getTypeIcon(product.type)}
                          <span className="ml-2">{product.type}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-xl text-[#9AA6B2] mb-2">No products found</p>
            <p className="text-[#9AA6B2]">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
