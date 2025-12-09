import { CaseStudy } from "@/types";

export const cases: CaseStudy[] = [
    // ORTHODONTICS - จัดฟัน (รูปเหล็กจัดฟัน)
    { id: 1, category: "Orthodontics", categoryKey: "orthodontics", titleKey: "crowdedTeeth", beforeImage: "/cases/ortho_before.webp", afterImage: "/cases/ortho_after.webp" },
    { id: 2, category: "Orthodontics", categoryKey: "orthodontics", titleKey: "gapClosure", beforeImage: "/cases/ortho_before.webp", afterImage: "/cases/ortho_after.webp" },
    { id: 3, category: "Orthodontics", categoryKey: "orthodontics", titleKey: "overbiteCorrection", beforeImage: "/cases/ortho_before.webp", afterImage: "/cases/ortho_after.webp" },

    // IMPLANTS - รากฟันเทียม (รูปรากเทียม)
    { id: 4, category: "Implants", categoryKey: "implants", titleKey: "singleImplant", beforeImage: "/cases/implant_before.webp", afterImage: "/cases/implant_after.webp" },
    { id: 5, category: "Implants", categoryKey: "implants", titleKey: "fullArch", beforeImage: "/cases/implant_before.webp", afterImage: "/cases/implant_after.webp" },
    { id: 6, category: "Implants", categoryKey: "implants", titleKey: "multipleImplants", beforeImage: "/cases/implant_before.webp", afterImage: "/cases/implant_after.webp" },

    // WHITENING - ฟอกสีฟัน (รูปฟอกฟัน)
    { id: 7, category: "Whitening", categoryKey: "whitening", titleKey: "laserWhitening", beforeImage: "/cases/whitening_before.webp", afterImage: "/cases/whitening_after.webp" },
    { id: 8, category: "Whitening", categoryKey: "whitening", titleKey: "stainRemoval", beforeImage: "/cases/whitening_before.webp", afterImage: "/cases/whitening_after.webp" },
    { id: 9, category: "Whitening", categoryKey: "whitening", titleKey: "zoomTreatment", beforeImage: "/cases/whitening_before.webp", afterImage: "/cases/whitening_after.webp" },

    // VENEERS - วีเนียร์ (รูปวีเนียร์)
    { id: 10, category: "Veneers", categoryKey: "veneers", titleKey: "hollywoodSmile", beforeImage: "/cases/veneers_before.webp", afterImage: "/cases/veneers_after.webp" },
    { id: 11, category: "Veneers", categoryKey: "veneers", titleKey: "smileMakeover", beforeImage: "/cases/veneers_before.webp", afterImage: "/cases/veneers_after.webp" },
    { id: 12, category: "Veneers", categoryKey: "veneers", titleKey: "celebritySmile", beforeImage: "/cases/veneers_before.webp", afterImage: "/cases/veneers_after.webp" },
];
