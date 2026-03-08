const labTests = [
    // HEMATOLOGY
    {
        name: "Hemoglobin",
        category: "Hematology",
        male: "13.5-17.5",
        female: "12.0-15.5",
        unit: "g/dL",
        high: "Polycythemia, dehydration",
        low: "Anemia, blood loss, nutritional deficiency",
        aliases: ["Hgb", "Hb", "HGB"]
    },
    {
        name: "WBC (White Blood Cells)",
        category: "Hematology",
        male: "4.5-11.0",
        female: "4.5-11.0",
        unit: "x10³/µL",
        high: "Infection, inflammation, leukemia",
        low: "Bone marrow suppression, viral infection",
        aliases: ["WBC", "TLC", "Total Leukocyte Count", "White Blood Count", "Leukocyte Count"]
    },
    {
        name: "Platelets",
        category: "Hematology",
        male: "150-400",
        female: "150-400",
        unit: "x10³/µL",
        high: "Thrombocytosis, inflammation",
        low: "Bleeding risk, ITP, bone marrow disorder",
        aliases: ["PLT", "Platelet Count", "Thrombocytes", "PC"]
    },
    {
        name: "RBC (Red Blood Cells)",
        category: "Hematology",
        male: "4.5-5.9",
        female: "4.0-5.2",
        unit: "x10⁶/µL",
        high: "Polycythemia, dehydration",
        low: "Anemia, hemorrhage",
        aliases: ["RBC", "Red Blood Count", "Erythrocyte Count", "TRC"]
    },
    {
        name: "Hematocrit (HCT)",
        category: "Hematology",
        male: "41-53",
        female: "36-46",
        unit: "%",
        high: "Dehydration, polycythemia",
        low: "Anemia, overhydration",
        aliases: ["HCT", "Hct", "PCV", "Packed Cell Volume"]
    },
    {
        name: "MCV (Mean Corpuscular Volume)",
        category: "Hematology",
        male: "80-100",
        female: "80-100",
        unit: "fL",
        high: "B12/folate deficiency, liver disease",
        low: "Iron deficiency anemia, thalassemia",
        aliases: ["MCV", "Mean Cell Volume"]
    },
    {
        name: "Neutrophils",
        category: "Hematology",
        male: "40-70",
        female: "40-70",
        unit: "%",
        high: "Bacterial infection, stress, steroids",
        low: "Viral infection, chemotherapy",
        aliases: ["PMN", "Polys", "Segs", "Granulocytes", "Polymorphonuclear"]
    },
    {
        name: "Lymphocytes",
        category: "Hematology",
        male: "20-40",
        female: "20-40",
        unit: "%",
        high: "Viral infection, lymphoma",
        low: "HIV, immunodeficiency, steroids",
        aliases: ["Lymphs", "Lymphocyte Count"]
    },

    // BIOCHEMISTRY
    {
        name: "Glucose (Fasting)",
        category: "Biochemistry",
        male: "70-100",
        female: "70-100",
        unit: "mg/dL",
        high: "Diabetes mellitus, stress hyperglycemia",
        low: "Hypoglycemia, insulin overdose",
        aliases: ["FBS", "FBG", "RBS", "Blood Sugar", "Blood Glucose", "Sugar"]
    },
    {
        name: "HbA1c",
        category: "Biochemistry",
        male: "<5.7",
        female: "<5.7",
        unit: "%",
        high: "Poorly controlled diabetes",
        low: "Hemolytic anemia, recent blood loss",
        aliases: ["A1c", "A1C", "Glycated Hemoglobin", "Glycosylated Hemoglobin", "Hemoglobin A1c"]
    },
    {
        name: "Total Cholesterol",
        category: "Biochemistry",
        male: "<200",
        female: "<200",
        unit: "mg/dL",
        high: "Cardiovascular disease risk",
        low: "Malnutrition, hyperthyroidism",
        aliases: ["TC", "Chol", "Cholesterol"]
    },
    {
        name: "LDL Cholesterol",
        category: "Biochemistry",
        male: "<100",
        female: "<100",
        unit: "mg/dL",
        high: "Atherosclerosis risk",
        low: "Malnutrition, liver disease",
        aliases: ["LDL", "LDL-C", "Bad Cholesterol", "Low Density Lipoprotein"]
    },
    {
        name: "HDL Cholesterol",
        category: "Biochemistry",
        male: ">40",
        female: ">50",
        unit: "mg/dL",
        high: "Cardioprotective",
        low: "Cardiovascular disease risk",
        aliases: ["HDL", "HDL-C", "Good Cholesterol", "High Density Lipoprotein"]
    },
    {
        name: "Triglycerides",
        category: "Biochemistry",
        male: "<150",
        female: "<150",
        unit: "mg/dL",
        high: "Pancreatitis, metabolic syndrome",
        low: "Malnutrition, hyperthyroidism",
        aliases: ["TG", "TGs", "TRIG", "Trigs"]
    },
    {
        name: "Sodium (Na)",
        category: "Biochemistry",
        male: "136-145",
        female: "136-145",
        unit: "mEq/L",
        high: "Dehydration, diabetes insipidus",
        low: "Heart failure, SIADH, excess water",
        aliases: ["Na", "Serum Sodium"]
    },
    {
        name: "Potassium (K)",
        category: "Biochemistry",
        male: "3.5-5.0",
        female: "3.5-5.0",
        unit: "mEq/L",
        high: "Renal failure, acidosis",
        low: "Diarrhea, vomiting, diuretics",
        aliases: ["K", "Serum Potassium"]
    },

    // LIVER (LFT)
    {
        name: "ALT (Alanine Aminotransferase)",
        category: "Liver",
        male: "7-56",
        female: "7-45",
        unit: "U/L",
        high: "Liver damage, hepatitis, fatty liver",
        low: "Not clinically significant",
        aliases: ["GPT", "SGPT", "Alanine Transaminase", "Liver Enzyme"]
    },
    {
        name: "AST (Aspartate Aminotransferase)",
        category: "Liver",
        male: "10-40",
        female: "10-35",
        unit: "U/L",
        high: "Liver disease, heart attack, muscle damage",
        low: "Not clinically significant",
        aliases: ["GOT", "SGOT", "Aspartate Transaminase"]
    },
    {
        name: "Total Bilirubin",
        category: "Liver",
        male: "0.1-1.2",
        female: "0.1-1.2",
        unit: "mg/dL",
        high: "Jaundice, liver disease, hemolysis",
        low: "Not clinically significant",
        aliases: ["TBil", "TBIL", "T-Bili", "T.Bili", "Bilirubin"]
    },
    {
        name: "Direct Bilirubin",
        category: "Liver",
        male: "0.0-0.3",
        female: "0.0-0.3",
        unit: "mg/dL",
        high: "Obstructive jaundice, hepatitis",
        low: "Not clinically significant",
        aliases: ["DBil", "DBIL", "D-Bili", "Conjugated Bilirubin"]
    },
    {
        name: "Albumin",
        category: "Liver",
        male: "3.5-5.0",
        female: "3.5-5.0",
        unit: "g/dL",
        high: "Dehydration",
        low: "Liver disease, malnutrition, nephrotic syndrome",
        aliases: ["Alb", "Serum Albumin"]
    },
    {
        name: "ALP (Alkaline Phosphatase)",
        category: "Liver",
        male: "44-147",
        female: "44-147",
        unit: "U/L",
        high: "Liver disease, bone disorders",
        low: "Hypothyroidism, pernicious anemia",
        aliases: ["Alk Phos", "Alkaline Phosphatase", "ALKP"]
    },

    // KIDNEY (RFT)
    {
        name: "Creatinine",
        category: "Kidney",
        male: "0.7-1.3",
        female: "0.5-1.1",
        unit: "mg/dL",
        high: "Kidney disease, dehydration, muscle breakdown",
        low: "Low muscle mass, pregnancy",
        aliases: ["Cr", "Creat", "SCr", "Serum Creatinine"]
    },
    {
        name: "Blood Urea Nitrogen (BUN)",
        category: "Kidney",
        male: "7-20",
        female: "7-20",
        unit: "mg/dL",
        high: "Kidney disease, dehydration, high protein diet",
        low: "Liver failure, malnutrition",
        aliases: ["BUN", "Urea", "Blood Urea", "Serum Urea"]
    },
    {
        name: "Uric Acid",
        category: "Kidney",
        male: "3.4-7.0",
        female: "2.4-6.0",
        unit: "mg/dL",
        high: "Gout, kidney disease, leukemia",
        low: "Wilson's disease, SIADH",
        aliases: ["UA", "Urate", "Serum Uric Acid"]
    },
    {
        name: "eGFR",
        category: "Kidney",
        male: ">60",
        female: ">60",
        unit: "mL/min/1.73m²",
        high: "Not applicable",
        low: "Chronic kidney disease indicator",
        aliases: ["GFR", "Glomerular Filtration Rate", "Kidney Function"]
    },

    // THYROID
    {
        name: "TSH (Thyroid Stimulating Hormone)",
        category: "Thyroid",
        male: "0.4-4.0",
        female: "0.4-4.0",
        unit: "mIU/L",
        high: "Hypothyroidism",
        low: "Hyperthyroidism, pituitary dysfunction",
        aliases: ["Thyrotropin", "Thyroid Stimulating Hormone"]
    },
    {
        name: "Free T4 (Thyroxine)",
        category: "Thyroid",
        male: "0.8-1.8",
        female: "0.8-1.8",
        unit: "ng/dL",
        high: "Hyperthyroidism, thyroiditis",
        low: "Hypothyroidism, pituitary disorder",
        aliases: ["FT4", "fT4", "Free Thyroxine", "T4"]
    },
    {
        name: "Free T3 (Triiodothyronine)",
        category: "Thyroid",
        male: "2.3-4.2",
        female: "2.3-4.2",
        unit: "pg/mL",
        high: "Hyperthyroidism, T3 toxicosis",
        low: "Hypothyroidism, severe illness",
        aliases: ["FT3", "fT3", "Free Triiodothyronine", "T3"]
    },
    {
        name: "Anti-TPO Antibodies",
        category: "Thyroid",
        male: "<35",
        female: "<35",
        unit: "IU/mL",
        high: "Hashimoto's thyroiditis, Graves' disease",
        low: "Not clinically significant",
        aliases: ["TPO", "Anti-TPO", "TPO Ab", "Thyroid Peroxidase Antibody"]
    }
];
