
const BATCH_1 = [
  // ===== TAXONOMY (1-20) =====
  {
    q: "What is taxonomy?",
    type: "mcq",
    options: ["The science of classifying organisms", "The study of cell structure", "The study of plant diseases", "The science of naming chemicals"],
    answer: 0,
    explain: "Taxonomy is defined in the text as the science of classifying organisms, including their identification, naming, and grouping based on shared characteristics."
  },
  {
    q: "Modern taxonomic classification is based on the natural system developed by which botanist?",
    type: "mcq",
    options: ["Aristotle", "Carolus Linnaeus", "Theophrastus", "Andrea Cesalpino"],
    answer: 1,
    explain: "The Swedish botanist Carolus Linnaeus established the natural concepts and system that modern taxonomy progressed from since the 18th century."
  },
  {
    q: "How many Kingdoms are organisms organized into in the family tree described in the text?",
    type: "mcq",
    options: ["3", "4", "5", "6"],
    answer: 2,
    explain: "The text states all living organisms are organized into a family tree starting with 5 Kingdoms."
  },
  {
    q: "The animal kingdom is divided into approximately how many phyla?",
    type: "mcq",
    options: ["10", "20", "38", "50"],
    answer: 2,
    explain: "The text states the animal (animalia) kingdom is divided into approximately 38 smaller phyla branches of the tree."
  },
  {
    q: "True or False: The taxonomic hierarchy from broad to narrow is Kingdom, Phylum, Class, Order, Family, Genus, Species.",
    type: "tf",
    answer: true,
    explain: "This is the standard hierarchy described, with Subclass and Suborder as additional intermediate levels."
  },
  {
    q: "Approximately how long ago did life appear on Earth, according to the text?",
    type: "mcq",
    options: ["1 billion years", "2 billion years", "3.5 billion years", "4.5 billion years"],
    answer: 2,
    explain: "The text states life appeared on Earth 3.5 billion years ago, after which many new types of organisms evolved."
  },
  {
    q: "A scientific name given to a species typically consists of how many words in Latin?",
    type: "mcq",
    options: ["One", "Two", "Three", "Four"],
    answer: 1,
    explain: "Scientists give species a two-word Latin name (binomial nomenclature) to distinguish them from similar organisms."
  },
  {
    q: "Which kingdom contains prokaryotic, unicellular organisms like Bacteria and Cyanobacteria?",
    type: "mcq",
    options: ["Protista", "Fungi", "Monera", "Plantae"],
    answer: 2,
    explain: "Monera contains prokaryotic, small, unicellular organisms such as Bacteria and Cyanobacteria, according to the Five Kingdoms table."
  },
  {
    q: "Which kingdom's organisms are described as Eukaryotic, Unicellular or colonial, with Ingest/Photosynthetic nutrition (e.g., Protozoa, Algae)?",
    type: "mcq",
    options: ["Monera", "Protista", "Fungi", "Animalia"],
    answer: 1,
    explain: "Protista organisms are eukaryotic, unicellular or colonial, and obtain nutrition by ingesting or photosynthesizing, including Protozoa and Algae."
  },
  {
    q: "True or False: Fungi obtain nutrition through photosynthesis like plants.",
    type: "tf",
    answer: false,
    explain: "According to the Five Kingdoms table, Fungi obtain nutrition by absorption, not photosynthesis; only Plantae uses photosynthesis."
  },
  {
    q: "Which classification approach groups organisms based on measurable similarities and differences rather than genetic makeup and evolutionary descent?",
    type: "mcq",
    options: ["Phenetics approach", "Cladistic approach", "Classical approach", "Molecular approach"],
    answer: 2,
    explain: "The classical approach classifies organisms based on measurable similarities and differences, not genetic makeup or evolutionary descent."
  },
  {
    q: "Which classification method is a quantitative method based on observable characteristics, such as finding birds and reptiles have 77% morphological similarity?",
    type: "mcq",
    options: ["Classical approach", "Phenetics approach", "Cladistic approach", "Taxonomic approach"],
    answer: 1,
    explain: "The phenetics approach is a quantitative method of observable characteristics, exemplified by the 77% similarity comparison between birds and reptiles."
  },
  {
    q: "Which classification approach is based on natural evolutionary relationships (phylogeny) and uses cladograms?",
    type: "mcq",
    options: ["Classical approach", "Phenetics approach", "Cladistic approach", "Linnaean approach"],
    answer: 2,
    explain: "The cladistic approach classifies organisms based on phylogeny, using fossil records and molecular genetics to build an evolutionary tree called a cladogram."
  },
  {
    q: "Which Greek philosopher divided animals into those with blood and those without blood?",
    type: "mcq",
    options: ["Theophrastus", "Aristotle", "Linnaeus", "Cesalpino"],
    answer: 1,
    explain: "Aristotle, who lived in the 300s BC, divided animals into those with blood and those without, roughly corresponding to vertebrates and invertebrates."
  },
  {
    q: "Who was Aristotle's pupil that applied his taxonomic approach to plants, classifying them into trees, shrubs, and herbs?",
    type: "mcq",
    options: ["Caspar Bauhin", "Andrea Cesalpino", "Theophrastus", "John Ray"],
    answer: 2,
    explain: "Theophrastus, Aristotle's pupil, applied Aristotle's taxonomic approach to plants since Aristotle's own writings on plants were lost."
  },
  {
    q: "Which 16th-century Italian botanist was the first to classify plants primarily according to structural characteristics like fruits and seeds?",
    type: "mcq",
    options: ["Caspar Bauhin", "Andrea Cesalpino", "Carolus Linnaeus", "John Ray"],
    answer: 1,
    explain: "Andrea Cesalpino was the first scientist to classify plants primarily by structural characteristics and developed character weighting."
  },
  {
    q: "Which Swiss botanist was the first to organize plants into a crude system resembling modern genera and species?",
    type: "mcq",
    options: ["Caspar Bauhin", "John Ray", "Theophrastus", "Aristotle"],
    answer: 0,
    explain: "Caspar Bauhin adapted Cesalpino's character weighting method and was first to organize plants resembling modern genera and species."
  },
  {
    q: "In the binomial system, what does the first word of a scientific name represent?",
    type: "mcq",
    options: ["The species name", "The genus name", "The family name", "The discoverer's name"],
    answer: 1,
    explain: "In binomial nomenclature, the first word is the genus name, and the second word is usually a descriptive adjective."
  },
  {
    q: "In what year did Linnaeus publish 'Systema Naturae', establishing the standard hierarchy of taxonomy?",
    type: "mcq",
    options: ["1629", "1735", "1859", "1900"],
    answer: 1,
    explain: "Linnaeus formalized the use of higher taxa in his book Systema Naturae, published in 1735."
  },
  {
    q: "True or False: Molecular systematics studies have always indicated that organisms should be reclassified, never supporting traditional classification.",
    type: "tf",
    answer: false,
    explain: "The text states that for many organisms, molecular systematics studies have supported traditional classification; only in some cases has it suggested reclassification."
  },
  // ===== VIRUSES (21-50) =====
  {
    q: "What does the word 'Virus' translate to in Arabic, according to the text?",
    type: "mcq",
    options: ["Life", "Disease", "Poison", "Crystal"],
    answer: 2,
    explain: "The text explains that Virus is a Latin word translated in Arabic as 'poison'."
  },
  {
    q: "In what year was the term 'virus' first used, according to the text?",
    type: "mcq",
    options: ["1392", "1892", "1935", "1948"],
    answer: 0,
    explain: "The text states the term virus was used for the first time in 1392."
  },
  {
    q: "Who is credited with enabling the discovery of the virus, though full information was recorded later in 1948?",
    type: "mcq",
    options: ["Edward Jenner", "Dmitry Avanowsky", "Frederic Tort", "Martinez Baaurnq"],
    answer: 1,
    explain: "The text states Dmitry Avanowsky enabled the discovery of the virus, while full information was recorded in 1948."
  },
  {
    q: "Which Arab scientist gave the first description of smallpox and measles in the tenth century?",
    type: "mcq",
    options: ["Ibn Sina", "Muhammad Ibn Zakariya al-Razi", "Al-Khwarizmi", "Ibn al-Haytham"],
    answer: 1,
    explain: "Muhammad Ibn Zakariya al-Razi showed the first description of smallpox and measles in his book on the topic."
  },
  {
    q: "Edward Jenner developed a vaccine after observing that milkmaids infected with which disease showed immunity to smallpox?",
    type: "mcq",
    options: ["Cowpox", "Rabies", "Polio", "Yellow fever"],
    answer: 0,
    explain: "Jenner and his assistant Sarah Nalmes noticed a milkmaid infected by cowpox disease showed immunity against smallpox, leading to the vaccine."
  },
  {
    q: "Under whose auspices was the smallpox vaccine circulated and produced in 1979?",
    type: "mcq",
    options: ["United Nations (UN)", "World Health Organization (WHO)", "Red Cross", "UNICEF"],
    answer: 1,
    explain: "The text states the smallpox vaccine was circulated and produced under the auspices of the World Health Organization (WHO) in 1979."
  },
  {
    q: "The development of the bacterial filter by Charlize Chambrland was central to which discovery?",
    type: "mcq",
    options: ["Bacteria", "Virus detection", "DNA structure", "Antibiotics"],
    answer: 1,
    explain: "The bacterial filter developed by Chambrland was the central point that helped Avanowsky isolate viruses from infected tobacco leaves."
  },
  {
    q: "Avanowsky isolated the virus for the first time from which plant?",
    type: "mcq",
    options: ["Wheat", "Rice", "Mosaic tobacco leaves", "Corn"],
    answer: 2,
    explain: "He inoculated healthy tobacco plants with filtrate from infected leaves, proving infection occurred from non-bacterial factors, isolating the virus from mosaic tobacco leaves."
  },
  {
    q: "What term was initially used to describe the agent causing tobacco mosaic disease before it was called 'virus'?",
    type: "mcq",
    options: ["Dissolved germ", "Crystal pathogen", "Hidden agent", "Filterable toxin"],
    answer: 0,
    explain: "The non-bacterial infectious agent was initially called the 'dissolved germ' before being named virus."
  },
  {
    q: "True or False: Frederic Tort discovered that bacteria can be infected by viruses.",
    type: "tf",
    answer: true,
    explain: "The text states that at the early twentieth century, Prof. Frederic Tort discovered that bacteria can be infected by virus."
  },
  {
    q: "In what year was tobacco mosaic virus crystallized and examined by electron microscope, revealing it was a protein crystal?",
    type: "mcq",
    options: ["1931", "1935", "1939", "1949"],
    answer: 1,
    explain: "In 1935, the tobacco mosaic virus was crystallized and examined by electron microscope, explaining it was a protein crystal."
  },
  {
    q: "In 1939, scientists explained that multiplication of bacterial viruses is achieved in what manner?",
    type: "mcq",
    options: ["Multiple gradual steps", "A single step", "Continuous growth", "Slow division"],
    answer: 1,
    explain: "In 1939, scientists explained that the multiplication of bacterial viruses is achieved in a single step."
  },
  {
    q: "Who grew influenza virus on fertilized chicken eggs in 1931, solving a key experimental difficulty?",
    type: "mcq",
    options: ["John Franklin", "William Ernest", "Frederick Robbins", "Thomas Andres"],
    answer: 1,
    explain: "William Ernest grew influenza virus on fertilized chicken eggs in 1931, though the text notes some viruses do not grow this way."
  },
  {
    q: "In 1949, who succeeded in growing the polio virus on a farm of live animal cell cultures?",
    type: "mcq",
    options: ["Edward Jenner alone", "John Franklin, Thomas Andres Flair Champman, and Frederick Robbins", "William Ernest alone", "Charlize Chambrland alone"],
    answer: 1,
    explain: "These scientists grew polio virus on live animal cell cultures in 1949, paving the way for sterile virus development."
  },
  {
    q: "True or False: There are fossils of viruses that help scientists determine the exact origin of viruses.",
    type: "tf",
    answer: false,
    explain: "The text states there are no fossils of viruses, which contributes to the lack of clarity about their exact origin."
  },
  {
    q: "What is one hypothesis about the origin of viral genetic material mentioned in the text?",
    type: "mcq",
    options: ["It originated from cosmic radiation", "It originated from the genetic material moving (plasmid) within the host", "It was created in laboratories", "It came from RNA found in rocks"],
    answer: 1,
    explain: "The hypothesis states the genetic material of the virus originated from genetic material moving (plasmid) inside the host."
  },
  {
    q: "What are the four main parts of a typical bacteriophage's external shape?",
    type: "mcq",
    options: ["Head, neck, sheath, tail fiber", "Capsid, envelope, spike, core", "Crown, body, base, foot", "Nucleus, membrane, wall, flagellum"],
    answer: 0,
    explain: "The bacterial virus (bacteriophage) consists of the head (protein crystal, polygonal), neck and sheath (rings or spiral), and caudal fiber tail."
  },
  {
    q: "What is the protective protein cover surrounding viral DNA called?",
    type: "mcq",
    options: ["Capsomere", "Capsid", "Envelope", "Sheath"],
    answer: 1,
    explain: "The full virus consists of DNA surrounded by a protective protein cover called the capsid, formed from identical protein subunits (capsomers)."
  },
  {
    q: "Which type of virus is composed of capsomers stacked around a central axis, forming a filamentous structure (e.g., tobacco mosaic virus)?",
    type: "mcq",
    options: ["Icosahedral", "Envelope", "Complex", "Helical"],
    answer: 3,
    explain: "Helical viruses are composed of capsomers stacked around a central axis, creating a hollow tube with a filamentous appearance."
  },
  {
    q: "The genetic material of helical viruses is typically what type?",
    type: "mcq",
    options: ["Double-stranded DNA", "Single strand RNA (ssRNA)", "Plasmid DNA", "Double-stranded RNA"],
    answer: 1,
    explain: "Helical viruses typically contain single strand RNA (ssRNA), though some cases may contain a single strip of DNA."
  },
  {
    q: "Icosahedral viruses appear spherical under low microscope power but are actually composed of how many copies of repeated protein units giving the regular form?",
    type: "mcq",
    options: ["Two to three", "Five to six", "Ten to twelve", "Twenty"],
    answer: 1,
    explain: "Icosahedral capsomers consist of five to six copies of repeated units linked accurately to viral DNA via non-covalent bonds."
  },
  {
    q: "Envelope viruses obtain their lipid bilayer membrane from which source?",
    type: "mcq",
    options: ["Synthesized de novo by the virus", "Modified host plasma, nuclear, or endoplasmic reticulum membranes", "Bacterial cell walls", "External environment directly"],
    answer: 1,
    explain: "Envelope viruses package modified plasma membranes (plasma membrane, nuclear membrane, or endoplasmic reticulum) derived from the host."
  },
  {
    q: "What molecules on the envelope of a virus act as receptors to help identify and bind to the host?",
    type: "mcq",
    options: ["Capsomers", "Glycoproteins", "Nucleotides", "Phospholipids"],
    answer: 1,
    explain: "Glycoprotein (sugar-protein link) works as receptors that help identify the host and place the appropriate specialized link."
  },
  {
    q: "True or False: Complex viruses, like bacteriophages, may contain both spiral-protein and icosahedral structures, plus tails and an outer wall.",
    type: "tf",
    answer: true,
    explain: "Complex viruses contain spiral-protein and icosahedral elements, and many have tails and outer walls, sometimes with hexagonal bases."
  },
  {
    q: "Which virus genome type generally contains both DNA and mRNA, as seen rarely in viruses like bacteriophages?",
    type: "mcq",
    options: ["RNA only", "DNA only", "Both DNA and RNA", "Neither DNA nor RNA"],
    answer: 2,
    explain: "The text states rare viruses contain both nucleic acids, like bacteriophages, which contain DNA as well as many mRNA."
  },
  {
    q: "Most plant viruses contain which type of nucleic acid, while bacterial viruses tend to form a double requirement of which?",
    type: "mcq",
    options: ["Plant viruses: DNA; Bacterial viruses: RNA", "Plant viruses: single RNA; Bacterial viruses: double DNA", "Both contain only RNA", "Both contain only DNA"],
    answer: 1,
    explain: "Most plant viruses contain a single RNA, while bacterial viruses tend to form a double requirement of DNA."
  },
  {
    q: "What unusual nucleotide substitution exists in some abnormal viruses, replacing cytosine?",
    type: "mcq",
    options: ["Hydroxy-methyl cytosine", "Adenine derivative", "Uracil substitute", "Thymine analog"],
    answer: 0,
    explain: "Some abnormal viruses show changes in nucleotide composition where hydroxy-methyl cytosine replaces regular cytosine."
  },
  {
    q: "When a viral RNA genome is divided into separated parts, each expressing a particular protein, this is called what?",
    type: "mcq",
    options: ["Fragmented", "Segmented", "Divided", "Partitioned"],
    answer: 1,
    explain: "When RNA genetic material is divided into separated parts, it is called segmented, with each part producing one particular capsid protein."
  },
  {
    q: "What symbols are used to denote single-stranded and double-stranded viral genomes respectively?",
    type: "mcq",
    options: ["S and D", "ss and ds", "1 and 2", "+ and -"],
    answer: 1,
    explain: "The symbol (ss) denotes a single thread/strand and (ds) denotes the double bar/strand of viral genomes."
  },
  {
    q: "In viral sense classification, when an RNA strand is translated and replicated directly, it is called what?",
    type: "mcq",
    options: ["Negative sense", "Positive sense", "Neutral sense", "Mixed sense"],
    answer: 1,
    explain: "RNA viruses with a positive sense (positive line) strand are translated and replicated directly, unlike negative-sense viruses which need a complementary strand first."
  },
  {
    q: "What enzyme does a negative-sense RNA virus use to create a complementary strand?",
    type: "mcq",
    options: ["DNA ligase", "RNA polymerase", "Reverse transcriptase", "Helicase"],
    answer: 1,
    explain: "If the RNA strand is negative, the virus creates a complementary strand using the enzyme RNA polymerization (RNA polymerase)."
  },
  {
    q: "The smallest viral genetic code expressing only 4 types of protein is estimated at about how many Daltons?",
    type: "mcq",
    options: ["10^3 Dalton", "10^6 Dalton", "10^8 Dalton", "10^10 Dalton"],
    answer: 1,
    explain: "The smallest genetic code expressing 4 types of protein is estimated at about 10^6 Dalton, while the largest is about 10^8 Dalton."
  },
  {
    q: "True or False: In general, RNA-containing viruses are larger than those containing DNA.",
    type: "tf",
    answer: false,
    explain: "The text states that in general, RNA-containing viruses are smaller than those containing DNA."
  },
  {
    q: "What is the phenomenon called when segmented nucleic acid viruses unite with host DNA to produce new genome strains, such as influenza in humans, pigs, and birds?",
    type: "mcq",
    options: ["Mutation", "Recombination of the gene", "Translation", "Conjugation"],
    answer: 1,
    explain: "This restructuring is known as recombination of the gene, explaining the difficulty of fixing a permanent influenza vaccine."
  },
  {
    q: "What organism serves as the host cell for bacteriophages?",
    type: "mcq",
    options: ["Plant cells", "Animal cells", "Bacterial cells", "Fungal cells"],
    answer: 2,
    explain: "Bacteriophages are viruses that parasitize bacterial cells, so the bacterial cell is considered the host cell."
  },
  {
    q: "What part of the bacteriophage is described as the 'organ of attachment' to host cells?",
    type: "mcq",
    options: ["The head", "The collar", "The phage tail", "The capsid"],
    answer: 2,
    explain: "The phage tail, consisting of a hollow core, contractile sheath, terminal base plate, and tail fibers, is the organ of attachment to host cells."
  },
  {
    q: "What are the two main types of bacteriophage replication cycles?",
    type: "mcq",
    options: ["Aerobic and anaerobic cycles", "Lytic (vegetative) cycle and Temperate (lysogenic) cycle", "Mitotic and meiotic cycles", "Linear and circular cycles"],
    answer: 1,
    explain: "Bacteriophage replication occurs through the lytic or vegetative cycle, and the temperate phage cycle (lysogenic cycle)."
  },
  {
    q: "In the lytic cycle, what is the first stage where the phage attaches to specific receptor sites on bacteria?",
    type: "mcq",
    options: ["Penetration", "Adsorption", "Assembly", "Release"],
    answer: 1,
    explain: "Adsorption is the first stage, where attachment occurs between sites on the phage tail fibers and specific receptor sites on bacteria; this step determines bacterial sensitivity to phages."
  },
  {
    q: "During the penetration stage, what happens to the phage DNA?",
    type: "mcq",
    options: ["It remains in the head outside the cell", "The tail sheath contracts and injects DNA into the cell, leaving the head and tail outside", "It is destroyed by the host", "It combines immediately with host DNA"],
    answer: 1,
    explain: "During penetration, the tail sheath contracts and injects the DNA into the cell, leaving the empty head and tail outside the cell."
  },
  {
    q: "What happens to bacterial DNA during the lytic cycle's digestion stage?",
    type: "mcq",
    options: ["It is replicated alongside phage DNA", "Degradable enzymes digest it into simple components", "It is transported out of the cell", "It is converted into RNA"],
    answer: 1,
    explain: "In the digestion stage, degradable enzymes are synthesized which act to digest bacterial DNA into its simple components."
  },
  {
    q: "True or False: After infection, there is a variable period where no phage components are detected in the cell while viral DNA directs the host to synthesize new enzymes.",
    type: "tf",
    answer: true,
    explain: "For a variable period (minutes to hours) following infection, no phage components are detected as the viral DNA redirects host metabolism to synthesize new enzymes like phage DNA polymerase."
  },
  {
    q: "During the assembly stage, what happens to protein subunits of the phage head and tail?",
    type: "mcq",
    options: ["They are destroyed", "They aggregate spontaneously, and each capsid acquires a nucleic acid molecule", "They remain separate permanently", "They form bacterial cell walls"],
    answer: 1,
    explain: "During assembly, protein subunits of the phage head and tail aggregate spontaneously, and each capsid acquires a nucleic acid molecule to become a mature phage particle."
  },
  {
    q: "What happens during the release stage of the lytic cycle?",
    type: "mcq",
    options: ["The phage remains dormant inside the cell", "The cell bursts and phage particles are released to infect new cells", "The cell divides into two daughter cells", "The phage DNA integrates into the host genome permanently"],
    answer: 1,
    explain: "After maturation and accumulation of a huge number of phages, the cell bursts, releasing phage particles to infect new cells."
  },
  {
    q: "What kingdom do bacteria belong to?",
    type: "mcq",
    options: ["Protista", "Fungi", "Monera", "Plantae"],
    answer: 2,
    explain: "Bacteria belong to the kingdom Monera and are prokaryotes."
  },
  {
    q: "Bacteria can be found in the fossil record tracing back how many years?",
    type: "mcq",
    options: ["1 billion years", "2 billion years", "3.2 billion years", "5 billion years"],
    answer: 2,
    explain: "Bacteria are the oldest, smallest, and most abundant organisms, found in the fossil record tracing back 3.2 billion years."
  },
  {
    q: "Rod-shaped bacteria are called what?",
    type: "mcq",
    options: ["Cocci", "Bacilli", "Spirilli", "Vibrios"],
    answer: 1,
    explain: "Bacteria are distinguished by shapes: rod-shaped bacteria are bacilli, round forms are cocci, and curved forms are spirilli."
  },
  {
    q: "Cocci occurring in clusters are specifically called what?",
    type: "mcq",
    options: ["Diplococci", "Streptococci", "Staphylococci", "Sarcina"],
    answer: 2,
    explain: "Cocci can occur in pairs (diplococci), clusters (staphylococci), or chains (streptococci)."
  },
  {
    q: "True or False: All bacterial cells, regardless of shape, share common structures including cell wall, cell membrane, cytoplasm, ribosomes, and the chromosome.",
    type: "tf",
    answer: true,
    explain: "Whether coccus or bacillus, all bacterial cells have these common structures, while plasmid, capsule, fimbriae, and flagella are possessed only by some bacteria."
  },
  {
    q: "What is the gelatinous polysaccharide or polypeptide outer covering of certain bacteria called?",
    type: "mcq",
    options: ["Cell wall", "Glycocalyx", "Plasma membrane", "Nucleoid"],
    answer: 1,
    explain: "A gelatinous polysaccharide or polypeptide outer covering of certain bacteria is called glycocalyx."
  },
  {
    q: "What is the term for glycocalyx when it is firmly attached to the cell wall versus loosely attached?",
    type: "mcq",
    options: ["Firmly attached = slime layer; loosely attached = capsule", "Firmly attached = capsule; loosely attached = slime layer", "Both are called capsules", "Both are called slime layers"],
    answer: 1,
    explain: "The glycocalyx is known as a capsule if firmly attached to the cell wall, or as a slime layer if loosely attached."
  },
  // ===== BACTERIA CONTINUED (51-65) =====
  {
    q: "What type of bacterial colonies form when bacteria possess capsules, versus those without?",
    type: "mcq",
    options: ["Capsules = rough (R); without = smooth (S)", "Capsules = smooth (S); without = rough (R)", "Both form rough colonies", "Both form smooth colonies"],
    answer: 1,
    explain: "Bacteria with capsules form smooth (S) colonies while those without capsules form rough (R) colonies."
  },
  {
    q: "True or False: Capsules are essential to cell viability, and all strains within a species must produce a capsule.",
    type: "tf",
    answer: false,
    explain: "Capsules are not essential to cell viability; some strains within a species will produce a capsule while others do not (S-R variation)."
  },
  {
    q: "Which of the following is NOT listed as an importance of bacterial capsules?",
    type: "mcq",
    options: ["Permit adhesion to host cell surfaces", "Source of nutrients and energy", "Prevent desiccation", "Enable photosynthesis"],
    answer: 3,
    explain: "Capsules don't enable photosynthesis; their listed importance includes adhesion, nutrient source, preventing desiccation, toxicity, protection from phages, antigenicity, and trapping ions."
  },
  {
    q: "What complex polymer makes up most bacterial cell walls, also called murein or mucopeptide?",
    type: "mcq",
    options: ["Cellulose", "Chitin", "Peptidoglycan", "Lipopolysaccharide"],
    answer: 2,
    explain: "Most bacteria have a complex cell wall consisting of peptidoglycan (also called murein, mucopeptide)."
  },
  {
    q: "The backbone of peptidoglycan consists of alternating units of which two molecules?",
    type: "mcq",
    options: ["NAG and NAM", "DNA and RNA", "Lipid A and Lipid B", "Glucose and fructose"],
    answer: 0,
    explain: "The peptidoglycan backbone consists of alternating units of NAG (N-acetylglucosamine) and NAM (N-acetylmuramic acid)."
  },
  {
    q: "In Gram positive bacteria, peptidoglycan can comprise up to what percentage of cell wall material?",
    type: "mcq",
    options: ["10%", "25%", "50%", "90%"],
    answer: 2,
    explain: "In gram positive bacteria, there may be as many as 40 sheets of peptidoglycan, comprising up to 50% of cell wall material."
  },
  {
    q: "Which substance is found in all Gram positive bacteria, even though wall teichoic acid may sometimes be lacking?",
    type: "mcq",
    options: ["Lipopolysaccharide", "Lipoteichoic acid", "Outer membrane", "Porins"],
    answer: 1,
    explain: "Some gram positive bacteria may lack wall teichoic acid but all contain lipoteichoic acid (linked to the membrane)."
  },
  {
    q: "Teichoic acid binds to which ion, playing an important role in supplying the cell with it?",
    type: "mcq",
    options: ["Calcium", "Magnesium", "Potassium", "Iron"],
    answer: 1,
    explain: "Teichoic acid binds to Magnesium ions and plays an important role in supplying the cell with this ion."
  },
  {
    q: "Why do Gram positive cells stain purple during the Gram stain procedure?",
    type: "mcq",
    options: ["They retain the crystal violet dye", "They absorb the counterstain", "They have an outer membrane", "They lack peptidoglycan"],
    answer: 0,
    explain: "Gram positive cells are purple stained due to retention of the crystal violet dye during the Gram stain procedure."
  },
  {
    q: "True or False: Gram negative bacteria have a thicker peptidoglycan layer than Gram positive bacteria.",
    type: "tf",
    answer: false,
    explain: "Gram negative cells consist of a relatively thin peptidoglycan layer (approximately 10 nm, 5-10% of cell wall), much thinner than Gram positive (20-80 nm, up to 50%)."
  },
  {
    q: "What is the space between the inner and outer membranes of Gram negative bacteria called?",
    type: "mcq",
    options: ["Cytoplasmic space", "Periplasmic space", "Nuclear space", "Extracellular matrix"],
    answer: 1,
    explain: "The space between the inner and outer membranes is known as the periplasmic space, which contains digestive enzymes and transport proteins."
  },
  {
    q: "Which component stabilizes the outer membrane of Gram negative bacteria by anchoring it to peptidoglycan?",
    type: "mcq",
    options: ["Lipopolysaccharide", "Lipoprotein", "Porins", "Teichoic acid"],
    answer: 1,
    explain: "Lipoprotein stabilizes the outer membrane by anchoring it to peptidoglycan in Gram negative bacteria."
  },
  {
    q: "What structures in the outer membrane of Gram negative bacteria specifically allow transport of solutes?",
    type: "mcq",
    options: ["Porins", "Mesosomes", "Pili", "Flagella"],
    answer: 0,
    explain: "The outer membranes contain several important porins, which specifically allow transport of solutes."
  },
  {
    q: "Lipopolysaccharide (LPS) is also known by what other name due to its toxic nature?",
    type: "mcq",
    options: ["Exotoxin", "Endotoxin", "Cytotoxin", "Neurotoxin"],
    answer: 1,
    explain: "LPS is toxic in nature and is called endotoxin because it is firmly bound to the cell wall and released only when the cell is lysed."
  },
  {
    q: "What can endotoxin trigger in Gram negative infections?",
    type: "mcq",
    options: ["Immediate cell repair", "Fever and septic shock", "Antibody production only", "Cell wall thickening"],
    answer: 1,
    explain: "Endotoxin can trigger fever and septic shock in gram negative infections, and also protects the cell from phagocytosis and lysozyme."
  },
  // ===== BACTERIA: MEMBRANE, CYTOPLASM, CHROMOSOME, RIBOSOMES, FLAGELLA, SPORES (66-100) =====
  {
    q: "The cell membrane (cytoplasmic membrane) is composed of approximately what percentage of phospholipids and proteins?",
    type: "mcq",
    options: ["20% phospholipids, 80% proteins", "40% phospholipids, 60% proteins", "60% phospholipids, 40% proteins", "80% phospholipids, 20% proteins"],
    answer: 1,
    explain: "Cell membrane is composed of phospholipids (40%) and proteins (60%), measuring approximately 5-10 nm in thickness."
  },
  {
    q: "What is the arrangement of proteins and lipids forming the cell membrane called?",
    type: "mcq",
    options: ["Lipid raft model", "Fluid mosaic model", "Solid bilayer model", "Static membrane model"],
    answer: 1,
    explain: "The arrangement of proteins and lipids to form a membrane is called the fluid mosaic model."
  },
  {
    q: "True or False: The membranes of bacteria (except Mycoplasma) contain sterols.",
    type: "tf",
    answer: false,
    explain: "The text explicitly states that membranes of bacteria (except Mycoplasma) do NOT contain sterols."
  },
  {
    q: "Specialized structures formed from convoluted invaginations of the cytoplasmic membrane, to which the bacterial chromosome attaches, are called what?",
    type: "mcq",
    options: ["Plasmids", "Mesosomes", "Ribosomes", "Pili"],
    answer: 1,
    explain: "Mesosomes are formed from convoluted invaginations of the cytoplasmic membrane; the bacterial chromosome attaches to them, and they are more prominent in gram positive bacteria."
  },
  {
    q: "Mesosomes are believed to be analogous to which eukaryotic organelle, since they are rich in respiratory enzymes?",
    type: "mcq",
    options: ["Nucleus", "Golgi apparatus", "Mitochondria", "Endoplasmic reticulum"],
    answer: 2,
    explain: "Mesosomes are believed to be analogous to eukaryotic mitochondria since they are rich in respiratory enzymes."
  },
  {
    q: "Which of the following is NOT a function of the cell membrane listed in the text?",
    type: "mcq",
    options: ["Selectively permeable barrier", "Site of cell wall synthesis initiation", "DNA replication storage site", "Site of attachment of the chromosome"],
    answer: 2,
    explain: "DNA replication storage is not listed; the cell membrane's functions include being a selective barrier, hosting cell wall synthesis initiation, and chromosome attachment, among others."
  },
  {
    q: "The bacterial chromosome is typically what shape, concentrated in a nucleoid region?",
    type: "mcq",
    options: ["Linear strand", "Single, closed circle", "Branched tree structure", "Double helix bundle"],
    answer: 1,
    explain: "The bacterial chromosome is typically a single, closed circle of DNA concentrated in a nucleoid region, with no membrane bound as in eukaryotes."
  },
  {
    q: "What are smaller extrachromosomal pieces of DNA called, which replicate independently and may give organisms an advantage?",
    type: "mcq",
    options: ["Mesosomes", "Plasmids", "Ribosomes", "Capsids"],
    answer: 1,
    explain: "Plasmids are smaller extrachromosomal DNA pieces that replicate independently of the chromosome and carry genes not essential for survival but advantageous."
  },
  {
    q: "True or False: Mitotic apparatus and nuclear membrane are completely lacking in bacteria.",
    type: "tf",
    answer: true,
    explain: "The text confirms mitotic apparatus and nuclear membrane are completely lacking in bacterial cells."
  },
  {
    q: "Bacterial ribosomes are termed what, in Svedberg units, distinguishing them from eukaryotic ribosomes?",
    type: "mcq",
    options: ["80S", "70S", "50S", "30S"],
    answer: 1,
    explain: "Bacterial ribosomes are termed 70S (Svedberg units) while eukaryotic ribosomes are termed 80S; this difference is exploited in antibiotic therapy."
  },
  {
    q: "What are aggregated structures of ribosomes called?",
    type: "mcq",
    options: ["Polysomes", "Mesosomes", "Plasmosomes", "Nucleosomes"],
    answer: 0,
    explain: "Ribosomes often aggregate to form structures known as polysomes."
  },
  {
    q: "Movement of bacteria toward or away from chemicals is called what type of taxis?",
    type: "mcq",
    options: ["Phototaxis", "Chemotaxis", "Aerotaxis", "Magnetotaxis"],
    answer: 1,
    explain: "Chemotaxis is movement toward or away from a chemical stimulus; phototaxis (light), aerotaxis (air), and magnetotaxis (magnetism) are other taxis types."
  },
  {
    q: "A flagella arrangement with a single flagellum at one pole is called what?",
    type: "mcq",
    options: ["Amphitrichous", "Peritrichous", "Lophotrichous", "Monotrichous"],
    answer: 3,
    explain: "Monotrichous describes a single flagellum at one pole, also called polar flagellum."
  },
  {
    q: "A flagella arrangement that is completely surrounded by flagella is called what?",
    type: "mcq",
    options: ["Monotrichous", "Amphitrichous", "Lophotrichous", "Peritrichous"],
    answer: 3,
    explain: "Peritrichous bacteria are completely surrounded by flagella."
  },
  {
    q: "What term describes bacteria with two or more flagella at one or both poles?",
    type: "mcq",
    options: ["Monotrichous", "Lophotrichous", "Amphitrichous", "Peritrichous"],
    answer: 1,
    explain: "Lophotrichous describes two or more flagella at one or both poles of the cell."
  },
  {
    q: "True or False: A positive taxis is movement toward a favorable environment, while a negative taxis is movement away from a repellent.",
    type: "tf",
    answer: true,
    explain: "This is the correct definition given in the text regarding the role of flagella in taxis movement."
  },
  {
    q: "What protein makes up fimbriae, short hair-like structures present in many gram negative bacteria?",
    type: "mcq",
    options: ["Flagellin", "Pilin", "Porin", "Collagen"],
    answer: 1,
    explain: "Fimbriae are short, hair-like structures made up of pilin (protein) and present in many gram negative bacteria."
  },
  {
    q: "Which of the following is NOT listed as an importance of pili (fimbriae)?",
    type: "mcq",
    options: ["Act as adhesins to colonize cells", "Detect chemical signals", "Act as receptors for bacteriophages", "Provide energy storage"],
    answer: 3,
    explain: "Pili act as adhesins, detect chemical signals, and serve as bacteriophage receptors; energy storage is not a listed function."
  },
  {
    q: "What is the process called by which bacteria like Bacillus and Clostridium produce resistant survival forms called endospores?",
    type: "mcq",
    options: ["Germination", "Sporulation", "Conjugation", "Lysis"],
    answer: 1,
    explain: "Sporulation is the process by which some bacteria produce resistant survival forms termed endospores under poor growth conditions."
  },
  {
    q: "True or False: Unlike fungal spores, bacterial spores (endospores) serve a reproductive function.",
    type: "tf",
    answer: false,
    explain: "Unlike fungal spores (which are usually exospores and serve reproduction), bacterial endospores do NOT serve a reproductive function."
  },
  {
    q: "Bacterial endospores are resistant to all of the following EXCEPT:",
    type: "mcq",
    options: ["High temperatures", "Dryness", "UV radiation", "Magnetic fields"],
    answer: 3,
    explain: "Endospores are resistant to high temperatures, dryness, toxic chemicals, and UV radiation; magnetic field resistance isn't mentioned."
  },
  {
    q: "What positions can a spore occupy within a bacterium, as mentioned in the text?",
    type: "mcq",
    options: ["Central, sub terminal, or terminal", "Apical, basal, lateral", "Anterior, posterior, medial", "Internal, external, mixed"],
    answer: 0,
    explain: "The position of the spore in a bacterium can be central, sub terminal, or terminal."
  },
  {
    q: "Which sterilization methods can kill bacterial spores, according to the text?",
    type: "mcq",
    options: ["Only refrigeration", "Autoclave and hot air oven", "Only UV light", "Only freezing"],
    answer: 1,
    explain: "Spores can be killed by sterilization methods such as autoclave and hot air oven, and chemical disinfectants like formaldehyde and ethylene oxide."
  },
  {
    q: "True or False: Spores occurring in soil and contaminating wounds can lead to infections like gangrene or tetanus.",
    type: "tf",
    answer: true,
    explain: "Since spores occur in soil, wounds contaminated by soil can lead to infections like gangrene or tetanus, as listed under the importance of spores."
  },
  {
    q: "Why are spores particularly useful for monitoring the efficacy of the sterilization process in an autoclave?",
    type: "mcq",
    options: ["They are easy to culture", "They are highly heat resistant", "They change color when sterile", "They are visible to the naked eye"],
    answer: 1,
    explain: "Since spores are highly heat resistant, they can be used to monitor the efficacy of the sterilization process in an autoclave."
  },
  {
    q: "What is one disturbing application of bacterial spores mentioned in the text?",
    type: "mcq",
    options: ["Cosmetic industry", "Biological warfare", "Food preservation", "Textile manufacturing"],
    answer: 1,
    explain: "The text notes that spores have also been used in biological warfare due to their resistance and persistence properties."
  },
  {
    q: "What is the primary role of bacterial cell wall regarding shape?",
    type: "mcq",
    options: ["It has no effect on shape", "It maintains cell shape; losing the wall causes loss of shape", "It only affects color", "It determines flagella number"],
    answer: 1,
    explain: "The cell wall maintains cell shape; any cell that loses its cell wall also loses its shape, becoming a protoplast."
  },
  {
    q: "What happens to gram positive bacteria if their peptidoglycan is digested away from the cell?",
    type: "mcq",
    options: ["They become more rigid", "They die immediately", "They lose their cell walls and become protoplasts", "They form spores"],
    answer: 2,
    explain: "If peptidoglycan is digested away, gram positive cells lose their cell walls and become protoplasts."
  },
  {
    q: "True or False: The cell wall serves as an attachment site for flagella.",
    type: "tf",
    answer: true,
    explain: "Among its roles, the cell wall is listed as an attachment site for flagella."
  },
];


const BATCH_2 = [
  {
    q: "In modern classification, algae is classified in which kingdom (except one division)?",
    type: "mcq",
    options: ["Plantae", "Protista (Phyto-protista)", "Monera", "Fungi"],
    answer: 1,
    explain: "In the modern classification system, algae is classified in Kingdom Protista (Phyto-protista) except for Cyanophycophyta, which remains in Monera."
  },
  {
    q: "Algae and Fungi were first included together in which old group established by Linnaeus?",
    type: "mcq",
    options: ["Thallophyta under Cryptogamia", "Spermatophyta", "Archegoniata", "Tracheophyta"],
    answer: 0,
    explain: "Algae and Fungi were first included in the group Cryptogamia, later divided into Thallophyta (which included Algae and Fungi), Bryophyta and Pteridophyta."
  },
  {
    q: "True or False: Algae are autotrophic due to the presence of chlorophyll, while fungi are heterotrophic due to its absence.",
    type: "tf",
    answer: true,
    explain: "Algae and fungi differ mainly because algae have chlorophyll (autotrophic) while fungi lack it (heterotrophic)."
  },
  {
    q: "What is the reserve food in Algae, compared to glycogen in Fungi?",
    type: "mcq",
    options: ["Starch", "Protein", "Chitin", "Lipids"],
    answer: 0,
    explain: "Reserve food in Algae is in the form of starch, while fungi store glycogen."
  },
  {
    q: "What are algal cell walls made of, compared to fungal cell walls made of chitin?",
    type: "mcq",
    options: ["Peptidoglycan", "Cellulose", "Lignin", "Keratin"],
    answer: 1,
    explain: "Algal cell walls are made of cellulose, while those of fungi are composed of chitin."
  },
  {
    q: "What are the two prokaryotic divisions of algae mentioned in the text?",
    type: "mcq",
    options: ["Chlorophyta and Rhodophyta", "Cyanophyta and Prochlorophyta", "Phaeophyta and Bacillariophyta", "Euglenophyta and Dinophyta"],
    answer: 1,
    explain: "Prokaryotic members of algae are grouped into two divisions: Cyanophyta and Prochlorophyta."
  },
  {
    q: "What pigments give Cyanophyceae (blue-green algae) their characteristic blue-green color, masking chlorophyll?",
    type: "mcq",
    options: ["Carotenoids only", "Phycocyanin and phycoerythrin", "Xanthophyll only", "Anthocyanin"],
    answer: 1,
    explain: "The traditional name blue-green algae is due to the presence of phycocyanin and phycoerythrin, which usually mask chlorophyll pigmentation."
  },
  {
    q: "What is the main storage product of Cyanophyta, described as an a-1,4-linked glucan?",
    type: "mcq",
    options: ["Starch", "Glycogen", "Cellulose", "Chitin"],
    answer: 1,
    explain: "The main storage product of Cyanophyta is glycogen (a-1,4-linked glucan), and cyanophycin is stored in large structured granules."
  },
  {
    q: "What unique structure in many Cyanophyta members is perhaps an active site of nitrogen fixation?",
    type: "mcq",
    options: ["Pyrenoid", "Heterocyst", "Chloroplast", "Mitochondria"],
    answer: 1,
    explain: "Many Cyanophyta members possess a unique structure known as heterocyst that perhaps is an active site of nitrogen fixation."
  },
  {
    q: "True or False: Sexual reproduction is present in Cyanophyceae, including flagellated reproductive bodies.",
    type: "tf",
    answer: false,
    explain: "Sexual reproduction is absent in Cyanophyceae; flagellated reproductive bodies are lacking, and there is total absence of gamete union."
  },
  {
    q: "In Oscillatoria, what is the small piece of trichome with one to many uniform cells, used for reproduction, called?",
    type: "mcq",
    options: ["Akinete", "Heterocyst", "Hormogone", "Zygospore"],
    answer: 2,
    explain: "Hormogones are the only method of reproduction in Oscillatoria, formed from death of intercalary cells or formation of separation discs."
  },
  {
    q: "What does Oscillatoria's trichome consist of, structurally?",
    type: "mcq",
    options: ["A single row of cells", "Multiple branched filaments", "A double helix structure", "A network of hyphae"],
    answer: 0,
    explain: "The trichome of Oscillatoria consists of a single row of cells enclosed within a barely recognizable sheath."
  },
  {
    q: "In Nostoc, what are the thick-walled, food-reserve-rich structures that develop between two heterocysts called?",
    type: "mcq",
    options: ["Hormogones", "Akinetes", "Zoospores", "Conidia"],
    answer: 1,
    explain: "Akinetes are thick walled structures rich in food reserves and cyanophycin granules, developed in series between two heterocysts in mature Nostoc colonies."
  },
  {
    q: "True or False: Nostoc can be found as an epiphyte inside Cycas coralloid roots and in association with fungal members forming lichens.",
    type: "tf",
    answer: true,
    explain: "Nostoc is known to occur as an epiphyte on aquatic weeds and inside Cycas coralloid roots, Azolla, Anthoceros, and forms lichens with fungal members."
  },
  {
    q: "In Rivularia, where is the single heterocyst with a single polar nodule located on the trichome?",
    type: "mcq",
    options: ["At the apex (tapering end)", "At the base", "In the middle", "Scattered throughout"],
    answer: 1,
    explain: "The base of the Rivularia trichome has a single heterocyst with a single polar nodule (basal heterocyst)."
  },
  // ===== CHLOROPHYTA (116-135) =====
  {
    q: "Approximately what percentage of Chlorophyceae members are freshwater forms?",
    type: "mcq",
    options: ["10%", "50%", "90%", "100%"],
    answer: 2,
    explain: "About 90% of Chlorophyceae members are freshwater forms, while the rest are marine in habitat."
  },
  {
    q: "Where is the photosynthetic reserve (starch) stored in Chlorophyceae?",
    type: "mcq",
    options: ["Pyrenoid", "Nucleus", "Cell wall", "Vacuole"],
    answer: 0,
    explain: "Photosynthetic reserve is starch that is stored in the pyrenoid."
  },
  {
    q: "In Chlamydomonas, what is the orange or red colored spot near the cell wall called?",
    type: "mcq",
    options: ["Pyrenoid", "Stigma (eye spot)", "Blepharoplast", "Papilla"],
    answer: 1,
    explain: "Near the cell wall, towards the anteriolateral part of the cell, lies an orange or red colored spot called stigma or eye spot."
  },
  {
    q: "What shape is the single chloroplast in Chlamydomonas, occupying the broad posterior part of the cell?",
    type: "mcq",
    options: ["Spiral", "Cup-shaped", "Stellate", "Discoid"],
    answer: 1,
    explain: "The broad posterior part of Chlamydomonas has a large, massive, single cup-shaped chloroplast."
  },
  {
    q: "How many flagella does Chlamydomonas typically have, located at the anterior end?",
    type: "mcq",
    options: ["One", "Two", "Four", "Six"],
    answer: 1,
    explain: "The anterior end of Chlamydomonas bears two closely situated flagella (whiplash type)."
  },
  {
    q: "What is the dormant, non-flagellated stage of Chlamydomonas formed under unfavorable conditions called?",
    type: "mcq",
    options: ["Zoospore stage", "Palmella stage", "Akinete stage", "Hormogone stage"],
    answer: 1,
    explain: "The Palmella stage is formed under unfavorable conditions, where cells lack flagella; upon return of favorable conditions, flagella develop again."
  },
  {
    q: "How many cells can a Volvox colony contain, according to the text?",
    type: "mcq",
    options: ["10-50", "100-200", "500-65000", "1 million+"],
    answer: 2,
    explain: "The number of cells in a Volvox colony varies from 500-65000 according to the species."
  },
  {
    q: "In Volvox, what connects each cell of the colony to neighboring cells?",
    type: "mcq",
    options: ["Cytoplasmic strands", "Cell walls fused together", "Flagella interlocking", "Chemical signals only"],
    answer: 0,
    explain: "Each cell of the Volvox colony is connected with neighboring cells by thin and delicate cytoplasmic strands."
  },
  {
    q: "Where are daughter colonies in Volvox mostly formed?",
    type: "mcq",
    options: ["In the anterior part", "In the posterior part of the parent colony", "Outside the gelatinous envelope", "Randomly distributed"],
    answer: 1,
    explain: "Daughter colonies in Volvox are formed mostly in the posterior part of the parent colony, embedded within it."
  },
  {
    q: "True or False: Volvox sexual reproduction is oogamous, with antheridia producing biflagellate antherozoids and oogonium developing a single egg.",
    type: "tf",
    answer: true,
    explain: "Sexual reproduction in Volvox is oogamous, where antheridium produces biflagellate antherozoids and the non-motile oogonium develops a single egg."
  },
  {
    q: "Why is the Volvox zygote orange-red in color?",
    type: "mcq",
    options: ["Due to chlorophyll concentration", "Due to the presence of haematochrome", "Due to oxidation of the cell wall", "Due to bacterial contamination"],
    answer: 1,
    explain: "Zygote is orange-red in color because of the presence of haematochrome (a pigment), and is thick-walled."
  },
  {
    q: "In Zygnema, how many axile and stellate chloroplasts are arranged along the longitudinal axis of each cell?",
    type: "mcq",
    options: ["One", "Two", "Four", "Six"],
    answer: 1,
    explain: "The most prominent feature of Zygnema cells is the presence of two axile and stellate chloroplasts arranged along the longitudinal axis."
  },
  {
    q: "What type of sexual reproduction occurs in Zygnema involving fusion of non-motile gametes from filaments?",
    type: "mcq",
    options: ["Oogamy", "Conjugation", "Budding", "Fission"],
    answer: 1,
    explain: "Sexual reproduction in Zygnema takes place by conjugation, where each cell of the filament forms a non-motile gamete."
  },
  {
    q: "What term describes species in Zygnema where both male and female gametes are produced by the same filament?",
    type: "mcq",
    options: ["Heterothallic", "Homothallic", "Monoecious only", "Dioecious"],
    answer: 1,
    explain: "Species where both male and female gametes are produced by the same filament are called homothallic."
  },
  {
    q: "True or False: A mature Zygnema zygospore has a thick, three-layered, ornamented, and colored (blue) wall.",
    type: "tf",
    answer: true,
    explain: "A completely mature zygospore in Zygnema has thick, three-layered, ornamented and colored (blue) wall."
  },
  // ===== XANTHOPHYTA / VAUCHERIA (136-148) =====
  {
    q: "Why is Xanthophyta also known as Heterokontophyta?",
    type: "mcq",
    options: ["Because of unequal length flagella", "Because of unusual cell wall material", "Because of dual nuclei", "Because of variable pigmentation only"],
    answer: 0,
    explain: "Flagella in Xanthophyta are borne anteriorly and are unequal in length, which is why this group is also known as Heterokontophyta."
  },
  {
    q: "What storage food is present in Xanthophyta instead of starch?",
    type: "mcq",
    options: ["Glycogen", "Protein", "Oil", "Cellulose"],
    answer: 2,
    explain: "Oil is present as storage food instead of starch in Xanthophyta, and pyrenoids are absent."
  },
  {
    q: "What pigment causes the yellow-green color of Xanthophyta chromatophores?",
    type: "mcq",
    options: ["Chlorophyll a", "Phycocyanin", "β-carotene", "Fucoxanthin"],
    answer: 2,
    explain: "Chromatophores are yellow-green due to the predominance of β-carotene."
  },
  {
    q: "In Vaucheria, what is the thallus structure described as, with multinucleate, branched, aseptate filaments?",
    type: "mcq",
    options: ["Unicellular", "Coenocyte (multinucleate)", "Strictly uninucleate", "Septate multicellular"],
    answer: 1,
    explain: "Vaucheria's thallus is unicellular, multinucleate, filamentous and branched, described as a coenocyte."
  },
  {
    q: "What are the thick-walled, oil-rich resting structures formed during asexual reproduction in Vaucheria under extreme desiccation called?",
    type: "mcq",
    options: ["Zoospores", "Akinetes (cysts)", "Heterocysts", "Conidia"],
    answer: 1,
    explain: "Akinetes or cysts are thick-walled and rich in oil contents, formed during extreme conditions of desiccation or low temperature."
  },
  {
    q: "What are the male reproductive bodies in Vaucheria called?",
    type: "mcq",
    options: ["Oogonia", "Antheridia", "Sporangia", "Conidiophores"],
    answer: 1,
    explain: "Male reproductive bodies in Vaucheria are antheridia, while female reproductive bodies are oogonia."
  },
  {
    q: "True or False: In Vaucheria, the oosphere is multinucleate in younger stages but always uninucleate at maturity.",
    type: "tf",
    answer: true,
    explain: "The text confirms that in younger stages, the oosphere is multinucleate, but at maturity it is always uninucleate."
  },
  {
    q: "How many layers compose the thick wall of the Vaucheria zygote?",
    type: "mcq",
    options: ["1 layer", "2 layers", "3-7 layers", "10+ layers"],
    answer: 2,
    explain: "The Vaucheria zygote is a thick-walled structure made of 3-7 layers, with a dense protoplast containing numerous oil droplets."
  },
  // ===== DIATOMS / BACILLARIOPHYTA (149-158) =====
  {
    q: "What is the chemical compound deposited in diatom cell walls, characterizing the group?",
    type: "mcq",
    options: ["Calcium carbonate", "Silicon dioxide", "Chitin", "Lignin"],
    answer: 1,
    explain: "The wall of diatoms is characterized by deposition of silicon dioxide and is made of two overlapping valves."
  },
  {
    q: "What is the large commercial deposit formed by diatom cell walls called?",
    type: "mcq",
    options: ["Limestone", "Diatomaceous earth (siliceous earth)", "Peat", "Coral reef"],
    answer: 1,
    explain: "The cell walls of diatoms form a large deposit called 'diatomaceous earth' or 'siliceous earth', used commercially in metal polishes and toothpastes."
  },
  {
    q: "What is the older valve of a diatom's two overlapping valves called?",
    type: "mcq",
    options: ["Hypotheca", "Epitheca", "Raphe", "Frustule"],
    answer: 1,
    explain: "The older part (valve) is known as epitheca, which fits closely over the younger part (valve), the hypotheca."
  },
  {
    q: "What is the longitudinal slit running from one polar nodule to another in some diatoms called?",
    type: "mcq",
    options: ["Foramen", "Girdle", "Raphe", "Cortex"],
    answer: 2,
    explain: "A longitudinal slit running from one polar nodule to another is called the raphe."
  },
  {
    q: "True or False: Diatomaceous earth can be used for lining high-temperature furnaces where temperatures reach as high as 1500°C.",
    type: "tf",
    answer: true,
    explain: "Diatomaceous earth is used for lining high temperature furnaces where temperatures reach as high as 1500°C."
  },
  {
    q: "What special structures of reproduction are formed under some circumstances in diatoms, besides cell division?",
    type: "mcq",
    options: ["Zoospores", "Auxospores", "Conidia", "Hormogones"],
    answer: 1,
    explain: "Under some circumstances, auxospores (special structures of reproduction) are formed in diatoms."
  },
  // ===== PHAEOPHYTA / FUCUS (159-172) =====
  {
    q: "Phaeophyta (brown algae) are distinctly what type of habitat organisms?",
    type: "mcq",
    options: ["Freshwater", "Marine", "Terrestrial", "Aerial"],
    answer: 1,
    explain: "The Phaeophyta or brown algae are distinctly marine algae, forming clear vertical zonation on rocks in the sea."
  },
  {
    q: "In Fucus, what structure attaches the thallus to rocks?",
    type: "mcq",
    options: ["Rhizoids", "A rounded disc-shaped holdfast", "Suction cups", "Adhesive hairs"],
    answer: 1,
    explain: "Fucus thallus is attached by a rounded disc-shaped holdfast, with a mid-rib standing erect from it."
  },
  {
    q: "What gives Fucus its characteristic brown color in the meristoderm cells?",
    type: "mcq",
    options: ["Chlorophyll a", "Carotene fucoxanthin", "Phycoerythrin", "Anthocyanin"],
    answer: 1,
    explain: "The brown color is due to a carotene called fucoxanthin, which can be dissolved with freshwater to reveal underlying chlorophyll."
  },
  {
    q: "What are the three internal layers of a mature Fucus wing, from outside to inside?",
    type: "mcq",
    options: ["Cortex, medulla, meristoderm", "Meristoderm, cortex, medulla", "Medulla, meristoderm, cortex", "Epidermis, cortex, pith"],
    answer: 1,
    explain: "Mature wing is internally differentiated into: i) meristoderm, ii) cortex, and iii) medulla."
  },
  {
    q: "What are the swollen tips of Fucus branches, lacking a midrib, called?",
    type: "mcq",
    options: ["Conceptacles", "Receptacles", "Cryptostomata", "Oogonia"],
    answer: 1,
    explain: "Fertile conceptacles are terminal; these swollen parts which lack midrib are called receptacles."
  },
  {
    q: "What is the opening called through which the conceptacle cavity opens in Fucus?",
    type: "mcq",
    options: ["Pore", "Ostiole", "Stoma", "Foramen"],
    answer: 1,
    explain: "The cavity of the conceptacle opens by a pore called the ostiole, with hair-like periphyses projecting outside."
  },
  {
    q: "How many oospheres or eggs does a mature Fucus oogonium typically show?",
    type: "mcq",
    options: ["One", "Four", "Eight", "Sixteen"],
    answer: 2,
    explain: "Mature oogonium in Fucus shows eight oospheres or eggs."
  },
  {
    q: "True or False: Fucus is found attached to rocks in intertidal rocky coasts of colder seas of the northern hemisphere.",
    type: "tf",
    answer: true,
    explain: "Fucus is found attached to rocks in intertidal rocky coasts of colder seas of the northern hemisphere, abundant along British Isles and Atlantic coast of America."
  },
  // ===== RHODOPHYTA (173-180) =====
  {
    q: "What pigments give red algae (Rhodophyta) their color, ranging from pure red to dark purple?",
    type: "mcq",
    options: ["Chlorophyll a and b", "R-phycoerythrin and r-phycocyanin", "Fucoxanthin and carotene", "Xanthophyll only"],
    answer: 1,
    explain: "Color of the thalli ranges from pure red to dark purple due to the presence of pigments r-phycoerythrin and r-phycocyanin."
  },
  {
    q: "What is the assimilatory (storage) product in Rhodophyta?",
    type: "mcq",
    options: ["Starch", "Glycogen", "Floridean starch or Floridoside", "Oil"],
    answer: 2,
    explain: "Assimilatory product in red algae is either Floridean starch or Floridoside."
  },
  {
    q: "What is the male reproductive structure (antheridium) called in red algae?",
    type: "mcq",
    options: ["Carpogonium", "Spermatangium", "Trichogyne", "Tetrasporophyte"],
    answer: 1,
    explain: "Sexual reproduction in red algae is brought about by spermatangium (antheridium) and carpogonium (oogonium)."
  },
  {
    q: "What is the tubular outgrowth on the carpogonium of red algae, acting as a receptive organ, called?",
    type: "mcq",
    options: ["Trichogyne", "Spermatium", "Pyrenoid", "Hypotheca"],
    answer: 0,
    explain: "The carpogonium possesses a tubular outgrowth-receptive organ known as trichogyne, situated at its anterior end."
  },
  {
    q: "What diploid plant does the carposporophyte's carpospores germinate to produce?",
    type: "mcq",
    options: ["Gametophyte", "Tetrasporophyte", "Zoosporangium", "Protonema"],
    answer: 1,
    explain: "Carposporophyte produces carpospores which on germination give rise to another diploid plant, a tetrasporophyte."
  },
  {
    q: "What valuable colloid product, used in microbiology and baking, is obtained from red algae?",
    type: "mcq",
    options: ["Pectin", "Agar", "Gelatin", "Carrageenan"],
    answer: 1,
    explain: "Agar, a colloid useful as microbiological culture medium and in baking/confectionery, is obtained from red algae known as agarophytes."
  },
  {
    q: "True or False: Male gametes in red algae, called spermatia, are motile and swim to the female gamete.",
    type: "tf",
    answer: false,
    explain: "Male gametes termed spermatia are NON-motile; they depend upon water current for their transportation to the female gamete."
  },
  {
    q: "Approximately how many species of red algae occur in fresh water habitats, despite the majority being marine?",
    type: "mcq",
    options: ["About 53 species", "About 500 species", "About 5 species", "None at all"],
    answer: 0,
    explain: "About a dozen or more genera with approximately 53 species of red algae occur in fresh water habitats."
  },
  // ===== FUNGI GENERAL (181-200) =====
  {
    q: "The branch of science dealing with fungi is known as what?",
    type: "mcq",
    options: ["Botany", "Mycology", "Phycology", "Bacteriology"],
    answer: 1,
    explain: "The branch that deals with fungi is known as 'Mycology', which initially included only the study of mushrooms."
  },
  {
    q: "Which Italian botanist laid the foundation of present-day mycology with his book 'Nova Plantarum Genera' published in 1729?",
    type: "mcq",
    options: ["Carolus Linnaeus", "Pier' Antonio Micheli", "G.C. Ainsworth", "Andrea Cesalpino"],
    answer: 1,
    explain: "Pier' Antonio Micheli is credited with laying the foundation of mycology, publishing Nova Plantarum Genera in 1729."
  },
  {
    q: "Out of approximately 100,000 known fungal species, how many are known to be valid species according to the text?",
    type: "mcq",
    options: ["About 10,000", "About 40,000", "About 60,000", "About 90,000"],
    answer: 1,
    explain: "Fungi include 100,000 species, of which about 40,000 are known to be valid species, leaving 60,000 to be investigated."
  },
  {
    q: "What are the special absorbing organs developed by parasitic/saprophytic fungi called?",
    type: "mcq",
    options: ["Rhizoids", "Haustoria", "Stolons", "Conidiophores"],
    answer: 1,
    explain: "Special absorbing organs called haustoria are developed by fungi existing as parasites or saprophytes."
  },
  {
    q: "What is the filamentous hyphal system that forms a fungal thallus called?",
    type: "mcq",
    options: ["Mycelium", "Rhizome", "Stolon", "Thallus proper"],
    answer: 0,
    explain: "Hyphal system (filamentous) forms a thallus and is called mycelium; a single filament or branch is termed a hypha."
  },
  {
    q: "What is the fungal cell wall typically made of?",
    type: "mcq",
    options: ["Cellulose", "Peptidoglycan", "Chitin", "Keratin"],
    answer: 2,
    explain: "The cell wall is typically made of chitin, while the reserve food occurs mainly in the form of glycogen."
  },
  {
    q: "True or False: Fungi which primarily grow as saprophytes in soil but turn parasitic on getting a suitable host are called facultative parasites.",
    type: "tf",
    answer: true,
    explain: "Fungi that primarily grow as saprophytes but turn parasitic when finding a host are known as facultative parasites."
  },
  {
    q: "What term describes fungi that live primarily as parasites but may grow as saprophytes after the host dies?",
    type: "mcq",
    options: ["Obligate parasites", "Obligate saprophytes", "Facultative saprophytes", "Facultative parasites"],
    answer: 2,
    explain: "Those that live primarily as parasites but grow as saprophytes after host death are known as facultative saprophytes."
  },
  {
    q: "Sexual reproduction in fungi involves two distinct phases. What are they called?",
    type: "mcq",
    options: ["Mitosis and meiosis", "Plasmogamy and karyogamy", "Sporulation and germination", "Conjugation and fission"],
    answer: 1,
    explain: "Sexual reproduction involves plasmogamy (union of cytoplasm) and karyogamy (union of two nuclei)."
  },
  {
    q: "How many subdivisions is the division Eumycota divided into?",
    type: "mcq",
    options: ["3", "4", "5", "6"],
    answer: 2,
    explain: "Division Eumycota is divided into 5 subdivisions: Mastigomycotina, Zygomycotina, Ascomycotina, Basidiomycotina, and Deuteromycotina."
  },
  {
    q: "What is the naked mass of protoplasm forming the plant body of Slime Molds (Myxomycota) called?",
    type: "mcq",
    options: ["Mycelium", "Plasmodium", "Thallus", "Protonema"],
    answer: 1,
    explain: "The plant body of Slime Molds is a naked mass of protoplasm called plasmodium."
  },
  {
    q: "True or False: The acellular creeping somatic phase of Slime Molds is plant-like, while the reproductive structures are animal-like.",
    type: "tf",
    answer: false,
    explain: "It's the opposite: the acellular creeping somatic phase is animal-like in structure, whereas the reproductive structures are plant-like."
  },
  {
    q: "Which class within Mastigomycotina is characterized by biflagellate zoospores and aseptate mycelium?",
    type: "mcq",
    options: ["Zygomycetes", "Oomycetes", "Hymenomycetes", "Plectomycetes"],
    answer: 1,
    explain: "Class Oomycetes has thalli usually mycelial (aseptate), biflagellate zoospores, and cellulosic cell walls."
  },
  {
    q: "What disease does Albugo candida cause on crucifers?",
    type: "mcq",
    options: ["Black rot", "White rust", "Powdery mildew", "Leaf spot"],
    answer: 1,
    explain: "A common disease, the white rust of crucifers, is caused by A. candida, attacking various flowering plants especially Cruciferae members."
  },
  {
    q: "In Albugo, what gelatinous structure joins two conidia together in a chain?",
    type: "mcq",
    options: ["Septum", "Disjunctor", "Sterigma", "Collar"],
    answer: 1,
    explain: "In a chain, two conidia are joined with each other by a gelatinous pad called disjunctor."
  },
  {
    q: "How are conidia arranged in a chain on the conidiophore of Albugo?",
    type: "mcq",
    options: ["Randomly", "Acropetally (youngest at top)", "Basipetally (youngest at base)", "In a circular pattern"],
    answer: 2,
    explain: "Conidia are arranged basipetally, meaning the youngest is at the base of the chain and the oldest at the top."
  },
  {
    q: "True or False: In Mucorales, asexual reproduction occurs through typical non-motile aplanospores.",
    type: "tf",
    answer: true,
    explain: "Order Mucorales is characterized by mostly saprophytic members with asexual reproduction by typical non-motile aplanospores."
  },
  {
    q: "Why is Rhizopus stolonifer commonly called the 'bread mold'?",
    type: "mcq",
    options: ["It only grows on wheat fields", "It grows so frequently on bread", "It was discovered in a bakery", "It produces bread-like textures"],
    answer: 1,
    explain: "R. stolonifer grows so frequently on bread that it is often called the 'bread mold'; it's also called 'black mold' for its black sporangia."
  },
  {
    q: "In Rhizopus, what are the three distinguishable parts of older mycelium hyphae?",
    type: "mcq",
    options: ["Roots, stem, leaves", "Rhizoids, stolons, sporangiophores", "Cortex, medulla, epidermis", "Capsid, envelope, tail"],
    answer: 1,
    explain: "Older mycelium has three parts: (i) branched rhizoids penetrating the substratum, (ii) stolon/runner growing horizontally, and (iii) sporangiophores growing upward."
  },
  {
    q: "What structure lies in the center of a Rhizopus sporangium, surrounded by aplanospores?",
    type: "mcq",
    options: ["Columella", "Nucleus", "Vacuole", "Pyrenoid"],
    answer: 0,
    explain: "The sporangium has a columella in the centre, with the space between columella and sporangium wall packed with aplanospores (the spore sac)."
  },
];

const BATCH_3 = [
  {
    q: "Which species of Saccharomyces is considered the most important fungus yet discovered?",
    type: "mcq",
    options: ["S. pombe", "S. cerevisiae", "S. boulardii", "S. carlsbergensis"],
    answer: 1,
    explain: "S. cerevisiae is the most abundant species and in many ways is considered the most important fungus yet discovered."
  },
  {
    q: "Where is S. cerevisiae naturally found?",
    type: "mcq",
    options: ["Deep soil layers", "Ripe fruits", "Animal intestines", "Ocean floors"],
    answer: 1,
    explain: "In nature, S. cerevisiae is found on ripe fruits, like many other types of yeast, enabling spontaneous fermentation of wines."
  },
  {
    q: "Approximately how many strains of S. cerevisiae exist, each with different physiological properties?",
    type: "mcq",
    options: ["About 5", "About 25", "About 100", "About 1000"],
    answer: 1,
    explain: "About 25 strains of S. cerevisiae exist, with different physiological properties relevant to biotechnological applications."
  },
  {
    q: "What gene has been fused to promoters of yeast proteins to help locate gene products within the yeast cell?",
    type: "mcq",
    options: ["Green fluorescent protein (GFP)", "Insulin gene", "Lac Z gene", "p53 gene"],
    answer: 0,
    explain: "By fusing the green fluorescent protein (GFP) gene to promoters of diverse yeast proteins, scientists can locate gene products within the cell."
  },
  {
    q: "True or False: A vegetative yeast cell typically contains multiple nuclei.",
    type: "tf",
    answer: false,
    explain: "A vegetative yeast cell is densely packed with organelles including ONE nucleus, a large central vacuole, and mitochondria."
  },
  {
    q: "What happens to yeast mitochondria when energy demand is high?",
    type: "mcq",
    options: ["They disappear entirely", "They fuse into one or a few large reticulate organelles", "They shrink permanently", "They convert to chloroplasts"],
    answer: 1,
    explain: "Mitochondria show a pronounced tendency to fuse into one or a few large reticulate organelles when energy demand is high."
  },
  {
    q: "What type of budding is typical in Saccharomyces cell reproduction?",
    type: "mcq",
    options: ["Unipolar budding only", "Multilateral (multipolar) budding", "No budding occurs", "Binary fission"],
    answer: 1,
    explain: "Blastoconidia (cell buds) show multilateral (multipolar) budding as typical in Saccharomyces."
  },
  {
    q: "How many ascospores does each ascus of Saccharomyces typically contain?",
    type: "mcq",
    options: ["1-4", "8 always", "16", "100+"],
    answer: 0,
    explain: "Each ascus of Saccharomyces contains 1-4 ascospores, and asci do not rupture at maturity."
  },
  {
    q: "True or False: When stained with Gram stain, Saccharomyces ascospores appear Gram-positive, while vegetative cells appear Gram-negative.",
    type: "tf",
    answer: false,
    explain: "It's the opposite: ascospores appear Gram-negative, while vegetative cells appear Gram-positive when stained with Gram stain."
  },
  {
    q: "In the Class Hemiascomycetes, how are asci formed?",
    type: "mcq",
    options: ["Inside ascocarps only", "Naked, formed directly from the zygotes", "Within basidiocarps", "From conidiophores"],
    answer: 1,
    explain: "In Hemiascomycetes, asci are naked and formed directly from the zygotes; ascogenous hyphae and ascocarps are not formed."
  },
  {
    q: "What disease group, resembling tuberculosis symptoms, is caused by A. flavus and A. niger?",
    type: "mcq",
    options: ["Pneumonia", "Aspergilloses", "Bronchitis", "Tetanus"],
    answer: 1,
    explain: "A. flavus and A. niger attack humans and animals causing a group of lung diseases collectively known as Aspergilloses, resembling tuberculosis."
  },
  {
    q: "What infection of the human ear can some species of Aspergillus cause?",
    type: "mcq",
    options: ["Otitis", "Otomycosis", "Tinnitus", "Mastoiditis"],
    answer: 1,
    explain: "Some species of Aspergillus infect human ear and cause Otomycosis."
  },
  {
    q: "What is the bulbous head at the tip of an Aspergillus conidiophore called?",
    type: "mcq",
    options: ["Sterigma", "Vesicle", "Columella", "Metulae"],
    answer: 1,
    explain: "Each conidiophore terminates in a bulbous head, the vesicle, which develops bottle-shaped structures called sterigmata."
  },
  {
    q: "In Aspergillus species with two layers of sterigmata, which layer bears the conidia?",
    type: "mcq",
    options: ["Primary sterigmata", "Secondary sterigmata", "Both layers equally", "Neither layer"],
    answer: 1,
    explain: "When two layers exist, the lower are primary sterigmata and upper are secondary sterigmata; conidia are borne only by secondary sterigmata."
  },
  {
    q: "What genus name is given to Aspergillus species that develop the perfect stage (cleistothecium)?",
    type: "mcq",
    options: ["Eurotium", "Penicillium", "Mucor", "Rhizopus"],
    answer: 0,
    explain: "Species of Aspergillus developing perfect stage (cleistothecium) are placed under the genus Eurotium."
  },
  // ===== PENICILLIUM / AGARICUS (216-230) =====
  {
    q: "What does 'Penicillus' mean in Latin, referencing the branched conidiophore shape of Penicillium?",
    type: "mcq",
    options: ["A flower", "A brush", "A needle", "A net"],
    answer: 1,
    explain: "The branched conidiophore with its conidia looks like a small 'Penicillus' (a brush in Latin)."
  },
  {
    q: "What are the ultimate branches of a Penicillium conidiophore called?",
    type: "mcq",
    options: ["Sterigmata", "Vesicles", "Metulae", "Columella"],
    answer: 2,
    explain: "Each conidiophore grows vertically and branches at its upper end; the ultimate branches are known as metulae."
  },
  {
    q: "What colors are Penicillium conidia generally?",
    type: "mcq",
    options: ["Red or orange", "Blue, sometimes green or yellow", "Black or brown", "White or colorless"],
    answer: 1,
    explain: "The conidia in Penicillium are generally blue, sometimes green or yellow, giving characteristic color to the colony."
  },
  {
    q: "In the Basidiomycotina, what is the characteristic reproductive body?",
    type: "mcq",
    options: ["Ascus", "Basidium", "Sporangium", "Zygospore"],
    answer: 1,
    explain: "The characteristic reproductive body of Basidiomycotina is the basidium, usually producing four basidiospores exogenously."
  },
  {
    q: "In Agaricus, what type of mycelium forms the fruiting body (aerial portion)?",
    type: "mcq",
    options: ["Monokaryotic mycelium only", "Dikaryotic mycelium", "Triploid mycelium", "Haploid spores directly"],
    answer: 1,
    explain: "The fruiting body is formed only by the dikaryotic mycelium, which has septate hyphae with granular protoplasm and oil globules."
  },
  {
    q: "What is the expanded cap-like structure at the top of the Agaricus stipe called?",
    type: "mcq",
    options: ["Annulus", "Pileus", "Velum", "Gill"],
    answer: 1,
    explain: "The mature basidiocarp consists of a stalk (stipe) having an expanded pileus at its top."
  },
  {
    q: "What remains as a ring on the stipe below the pileus after the veil ruptures in mature Agaricus?",
    type: "mcq",
    options: ["Annulus", "Gill", "Trama", "Hymenium"],
    answer: 0,
    explain: "With growth, the veil or velum ruptures, and in mature basidiocarp it remains in the form of a ring (annulus) on the stipe."
  },
  {
    q: "In a transverse section of an Agaricus gill, what are the three regions from inside out?",
    type: "mcq",
    options: ["Hymenium, sub-hymenium, trama", "Trama, sub-hymenium, hymenium", "Pileus, stipe, velum", "Cortex, medulla, pith"],
    answer: 1,
    explain: "The gill exhibits a trama (central core), a sub-hymenium, and a hymenium (superficial layer), from inside to outside."
  },
  {
    q: "What are the sterile cells intermingled with fertile basidia in the hymenium called?",
    type: "mcq",
    options: ["Paraphyses", "Conidiophores", "Sterigmata", "Trichomes"],
    answer: 0,
    explain: "The hymenium at maturity consists of fertile cells (basidia) intermingled with sterile cells (paraphyses), which are undeveloped basidia."
  },
  {
    q: "How many basidiospores does each Agaricus basidium typically bear, on short stalks called sterigmata?",
    type: "mcq",
    options: ["Generally four, sometimes two", "Always eight", "Sixteen", "Two always"],
    answer: 0,
    explain: "Each basidium is club-shaped, bearing at its top generally four but sometimes two basidiospores, on sterigmata."
  },
  {
    q: "True or False: Deuteromycotina members reproduce both sexually and asexually with equal frequency.",
    type: "tf",
    answer: false,
    explain: "Deuteromycotina members reproduce ONLY asexually (imperfect stages); their 'perfect stage' (sexual reproduction) is unknown."
  },
  {
    q: "Approximately how many species are included in the Deuteromycotina (Fungi Imperfecti)?",
    type: "mcq",
    options: ["1,000-2,000", "15,000-20,000", "40,000-50,000", "100,000+"],
    answer: 1,
    explain: "The Deuteromycotina is a heterogenous group of some 15,000 to 20,000 species, phylogenetically unrelated to each other."
  },
  {
    q: "Which two genera are given as examples of Deuteromycotina in the text?",
    type: "mcq",
    options: ["Rhizopus and Mucor", "Fusarium and Alternaria", "Aspergillus and Penicillium", "Agaricus and Funaria"],
    answer: 1,
    explain: "Fusarium sp. and Alternaria sp. are given as examples of Deuteromycotina."
  },
  {
    q: "True or False: Many Deuteromycotina species are obligate saprophytes, despite the group being mainly facultative parasites.",
    type: "tf",
    answer: true,
    explain: "The parasitism is mainly of the facultative type, but many species are, however, obligate saprophytes."
  },
  {
    q: "In Penicillium, how are conidia arranged on the sterigmata?",
    type: "mcq",
    options: ["Acropetally", "Basipetally", "Randomly", "In a spiral only"],
    answer: 1,
    explain: "Each branch ends in bottle-shaped sterigmata bearing a group of conidia arranged basipetally (youngest at base)."
  },
  // ===== KINGDOM PLANTA / BRYOPHYTA (231-260) =====
  {
    q: "What is the subkingdom focus of land plants discussed in the text?",
    type: "mcq",
    options: ["Thallophytes", "Embryophytes", "Protophytes", "Archaeophytes"],
    answer: 1,
    explain: "The text focuses on the subkingdom Embryophytes, subdivided into Bryophytes and Pteridophytes/Spermatophytes."
  },
  {
    q: "Bryophytes lack vascular tissue and take in water through which structure?",
    type: "mcq",
    options: ["True roots", "Rhizoids", "Xylem vessels", "Stomata"],
    answer: 1,
    explain: "Bryophytes lack vascular tissue and take water in through rhizoids (an undifferentiated tissue) and absorption from the air."
  },
  {
    q: "What protocol governs the writing of a scientific name's genus and species?",
    type: "mcq",
    options: ["Both lowercase, not italicized", "Genus uppercase first letter, species lowercase, both italicized", "Both uppercase, underlined", "Genus italicized only"],
    answer: 1,
    explain: "Proper protocol is to begin the genus name with an uppercase letter, the species name with lowercase, and italicize (or underline) both."
  },
  {
    q: "Approximately how many species of Bryophyta exist, distributed in about 900 genera?",
    type: "mcq",
    options: ["2,400", "24,000", "240,000", "2,400,000"],
    answer: 1,
    explain: "Bryophyta includes mosses, liverworts and hornworts, numbering about 24,000 species in approximately 900 genera."
  },
  {
    q: "What is the largest Bryophyte genus mentioned, an Australian genus reaching 40-70 cm in length?",
    type: "mcq",
    options: ["Riccia", "Funaria", "Dawsonia", "Zoopsis"],
    answer: 2,
    explain: "The largest Bryophyte is probably the Australian genus Dawsonia, attaining a length of about 40-70 cm."
  },
  {
    q: "What is the smallest, indeed microscopic, Bryophyte genus mentioned?",
    type: "mcq",
    options: ["Dawsonia", "Zoopsis", "Riccia", "Funaria"],
    answer: 1,
    explain: "Bryophytes are generally small and many are microscopic, e.g. Zoopsis."
  },
  {
    q: "In Bryophytes, which generation is independent, long-lived and bears the sex organs?",
    type: "mcq",
    options: ["Sporophyte", "Gametophyte", "Both equally", "Neither"],
    answer: 1,
    explain: "A noteworthy point about Bryophytes is that the gametophyte bearing the sex organs is independent and long-lived, while the sporophyte is dependent and short-lived."
  },
  {
    q: "What is the male sex organ in Bryophytes called?",
    type: "mcq",
    options: ["Archegonium", "Antheridium", "Carpogonium", "Spermatangium"],
    answer: 1,
    explain: "The antheridium (male sex organ) consists of a stalk and club-shaped or spherical body, producing antherozoids."
  },
  {
    q: "What protective covering forms from the enlarged basal portion of the archegonium after fertilization in Bryophytes?",
    type: "mcq",
    options: ["Velum", "Calyptra", "Operculum", "Indusium"],
    answer: 1,
    explain: "The embryo is retained within the archegonium whose basal portion enlarges to form calyptra, a protective covering."
  },
  {
    q: "What three parts compose the simple sporophyte of Bryophytes?",
    type: "mcq",
    options: ["Root, stem, leaf", "Foot, seta, capsule", "Rhizoid, stem, leaf", "Stalk, blade, sheath"],
    answer: 1,
    explain: "The simple sporophyte usually consists of foot, seta, and spore producing terminal capsule."
  },
  {
    q: "True or False: True roots are present in Bryophyta (Division Bryophyta).",
    type: "tf",
    answer: false,
    explain: "Division Bryophyta is characterized by the absence of true roots; their function is taken up by rhizoids."
  },
  {
    q: "Which class of Bryophyta is characterized by rhizoids without septa and chloroplasts without pyrenoids?",
    type: "mcq",
    options: ["Bryopsida", "Hepaticopsida", "Anthocerotopsida", "Sphagnopsida"],
    answer: 1,
    explain: "Class Hepaticopsida is characterized by rhizoids without septa, chloroplasts without pyrenoids, and capsule lacking columella."
  },
  {
    q: "In Riccia, what shape does repeated dichotomy of the thalli produce?",
    type: "mcq",
    options: ["A linear chain", "A rosette", "A spiral", "A net"],
    answer: 1,
    explain: "A rosette is formed due to repeated dichotomies of the Riccia thalli, which is thalloid, prostrate, and ribbon-like."
  },
  {
    q: "What two types of rhizoids does Riccia possess on its ventral side?",
    type: "mcq",
    options: ["Long and short", "Smooth walled and tuberculate", "Branched and unbranched", "Colored and colorless"],
    answer: 1,
    explain: "Rhizoids are of two types: (i) smooth walled and (ii) tuberculate, which produce tuber-like or peg-like ingrowths."
  },
  {
    q: "In Riccia thallus cross section, what does the photosynthetic region consist of?",
    type: "mcq",
    options: ["Compactly arranged parenchyma only", "Vertical rows of unbranched assimilatory filaments separated by air chambers", "A solid mass of chloroplasts", "Spongy mesophyll tissue"],
    answer: 1,
    explain: "The photosynthetic region consists of vertical rows of unbranched assimilatory filaments, separated by narrow air chambers, opening via air pores."
  },
  {
    q: "True or False: Riccia thallus is dioecious, with separate male and female plants.",
    type: "tf",
    answer: false,
    explain: "The Riccia thallus is monoecious, with both sex organs (antheridium and archegonium) situated in the mid-dorsal groove of the same thallus."
  },
  {
    q: "In Riccia, where are sex organs (antheridia and archegonia) situated on the thallus?",
    type: "mcq",
    options: ["At the apex only", "In the mid-dorsal groove", "On the ventral scales", "Along the margins"],
    answer: 1,
    explain: "Sex organs in Riccia are present in the mid-dorsal groove and are embedded in the thallus."
  },
  {
    q: "How many neck canal cells does a Riccia archegonium typically possess?",
    type: "mcq",
    options: ["2", "4", "6", "8"],
    answer: 1,
    explain: "The neck of the Riccia archegonium consists of 6 vertical rows of cells, 6-9 cells in height, and possesses 4 neck canal cells."
  },
  {
    q: "What parts compose the Riccia sporophyte, given that seta and foot are absent?",
    type: "mcq",
    options: ["Only the capsule", "Capsule and seta", "Capsule and foot", "All three: foot, seta, capsule"],
    answer: 0,
    explain: "The sporophyte in Riccia is represented only by the capsule; foot and seta are absent."
  },
  {
    q: "How are mature spore tetrads arranged in the Riccia sporophyte?",
    type: "mcq",
    options: ["Linearly", "Tetrahedrally", "Spirally", "Randomly scattered with no pattern"],
    answer: 1,
    explain: "The mature sporophyte has spore tetrads arranged tetrahedrally, surrounded by the outer layer of calyptra."
  },
  {
    q: "Funaria belongs to which class of Bryophyta?",
    type: "mcq",
    options: ["Hepaticopsida", "Bryopsida", "Anthocerotopsida", "Marchantiopsida"],
    answer: 1,
    explain: "Funaria sp. (Cord Moss) belongs to Division Bryophyta, Class Bryopsida."
  },
  {
    q: "What underground structure precedes the erect leafy gametophore in Funaria?",
    type: "mcq",
    options: ["Rhizome", "Protonema", "Tuber", "Bulb"],
    answer: 1,
    explain: "The gametophyte shows a prostrate underground protonema and an erect leafy gametophore that arises from it."
  },
  {
    q: "True or False: Funaria rhizoids are unicellular and unbranched.",
    type: "tf",
    answer: false,
    explain: "Funaria rhizoids are slender, branched, and multicellular, with oblique septa, unlike liverwort rhizoids which are unicellular and unbranched."
  },
  {
    q: "What vegetative reproductive structures are produced on the stem and leaves of Funaria, which become brown 'bulbils' when grown on rhizoids?",
    type: "mcq",
    options: ["Spores", "Gemmae", "Akinetes", "Conidia"],
    answer: 1,
    explain: "Multicellular and green gemmae are produced on stem and leaves; when grown on rhizoids, they become brown bulbils."
  },
  {
    q: "What are the multicellular capitated hairs intermingled with antheridia in Funaria's male branch called?",
    type: "mcq",
    options: ["Rhizoids", "Paraphyses", "Trichomes", "Cilia"],
    answer: 1,
    explain: "Intermingled with antheridia are multicellular capitated hairs, known as paraphyses, both surrounded by perichaetial leaves."
  },
  {
    q: "What structure at the apex of the antheridial jacket helps liberate antherozoids in Funaria?",
    type: "mcq",
    options: ["Operculum", "Ostiole", "Calyptra", "Stoma"],
    answer: 0,
    explain: "At the apex of the antheridial jacket is an operculum, which helps in liberation of antherozoids."
  },
  {
    q: "How many neck canal cells are typically present in a Funaria archegonium?",
    type: "mcq",
    options: ["Two", "Four", "Six or more", "Always eight"],
    answer: 2,
    explain: "In the neck of a Funaria archegonium there are six or more neck canal cells, plus one venter canal cell and one egg cell."
  },
  {
    q: "What three parts compose the mature sporophyte of Funaria?",
    type: "mcq",
    options: ["Rhizoid, stem, leaf", "Foot, seta, capsule", "Root, shoot, flower", "Pileus, stipe, gills"],
    answer: 1,
    explain: "A mature Funaria sporophyte shows three parts: (i) foot, (ii) seta, and (iii) capsule, with the capsule covered by calyptra."
  },
  {
    q: "What are the three regions of the Funaria capsule in longitudinal section?",
    type: "mcq",
    options: ["Apex, middle, base", "Apophysis, theca proper, upper region", "Cortex, medulla, pith", "Wall, cavity, columella"],
    answer: 1,
    explain: "The L.S. of the capsule can be divided into three regions: (i) apophysis (basal region), (ii) theca proper, and (iii) upper region."
  },
  // ===== PTERIDOPHYTA (261-280) =====
  {
    q: "Why are pteridophytes sometimes called 'vascular cryptogams'?",
    type: "mcq",
    options: ["Because they lack chlorophyll", "Because of true xylem presence and hidden sexual reproduction", "Because they only grow underground", "Because they are extinct"],
    answer: 1,
    explain: "Pteridophytes are called vascular cryptogams because of the presence of true xylem and hidden type of sexual reproduction."
  },
  {
    q: "Which two pteridophyte genera are mentioned as growing in aquatic habitats, unlike most land-inhabiting members?",
    type: "mcq",
    options: ["Riccia and Funaria", "Salvinia and Azolla", "Pinus and Fucus", "Nostoc and Rivularia"],
    answer: 1,
    explain: "Generally pteridophytes are land inhabiting, but Salvinia and Azolla grow in aquatic habitat."
  },
  {
    q: "What term describes the evolutionary tendency in pteridophytes producing large leaves and relatively small stems (e.g., ferns)?",
    type: "mcq",
    options: ["Microphyllous", "Megaphyllous", "Heterosporous", "Homosporous"],
    answer: 1,
    explain: "The megaphyllous type resulted in large leaves and relatively small stems, represented by ferns."
  },
  {
    q: "What term describes the tendency where leaves are small relative to the stem and leaf trace leaves no gap in the stele (e.g., club mosses, horsetails)?",
    type: "mcq",
    options: ["Megaphyllous", "Microphyllous", "Heterosporous", "Archegoniate"],
    answer: 1,
    explain: "The microphyllous type has small leaves relative to the stem with no stelar gap, represented by club mosses and horse tails."
  },
  {
    q: "In megaphyllous leaves, what two parts compose the leaf structure?",
    type: "mcq",
    options: ["Petiole and lamina (blade)", "Stipe and pileus", "Sheath and ligule", "Rachis and pinnae only"],
    answer: 0,
    explain: "Leaves in megaphyllous types consist of a petiole and a leaf blade or lamina with many veins."
  },
  {
    q: "True or False: Microphyllous leaves typically have a petiole and multiple veins, similar to megaphyllous leaves.",
    type: "tf",
    answer: false,
    explain: "Microphyllous leaves are much simpler, with NO petiole and usually only ONE vein, unlike megaphyllous leaves."
  },
  {
    q: "What are the little capsules in which spores develop, generally borne on leaves or in leaf axils, called?",
    type: "mcq",
    options: ["Sporangia", "Gametangia", "Conceptacles", "Ascocarps"],
    answer: 0,
    explain: "Reproductive organs are made up of little capsules called sporangia, in which spores are developed."
  },
  {
    q: "What is a plant called when all its spores are the same size?",
    type: "mcq",
    options: ["Heterosporous", "Homosporous", "Isosporous (synonym used differently)", "Monosporous"],
    answer: 1,
    explain: "When all spores are of the same size, the plant is said to be homosporous."
  },
  {
    q: "In heterosporous plants, what are the smaller spores called, and where are they developed?",
    type: "mcq",
    options: ["Megaspores, in megasporangia", "Microspores, in microsporangia", "Zoospores, in zoosporangia", "Aplanospores, in sporangia"],
    answer: 1,
    explain: "In heterosporous types, smaller spores are termed microspores, developed in microsporangia."
  },
  {
    q: "True or False: The fern plant and the moss plant can be directly compared because they represent the same generation in the life cycle.",
    type: "tf",
    answer: false,
    explain: "The fern plant and moss plant CANNOT be compared directly, as they belong to different generations of the life cycle (sporophyte vs gametophyte respectively)."
  },
  // ===== GYMNOSPERMS / PINUS (281-300) =====
  {
    q: "Gymnosperms differ from angiosperms in possessing what type of ovules?",
    type: "mcq",
    options: ["Enclosed ovules", "Naked ovules", "Double-walled ovules", "Fused ovules"],
    answer: 1,
    explain: "Gymnosperms differ from angiosperms firstly in possessing naked ovules, with pollen lodging directly on the micropyle."
  },
  {
    q: "What vascular elements are absent in gymnosperms, present in angiosperms?",
    type: "mcq",
    options: ["Xylem only", "True vessels and companion cells", "Phloem only", "Tracheids"],
    answer: 1,
    explain: "Gymnosperms lack true vessels and companion cells, distinguishing them from angiosperms."
  },
  {
    q: "What term describes the cone-like fructifications of gymnosperms made of aggregated sporophylls bearing sporangia?",
    type: "mcq",
    options: ["Cones (strobili)", "Capsules", "Conceptacles", "Receptacles"],
    answer: 0,
    explain: "The fructifications (cones) are made up of an aggregation of sporophylls bearing sporangia, in which spores are produced."
  },
  {
    q: "How are gymnosperm cones typically sexed?",
    type: "mcq",
    options: ["Always bisexual", "Generally unisexual", "Sexless", "Triploid"],
    answer: 1,
    explain: "Cones are generally unisexual, with male cones usually smaller and short-lived, and female cones larger and long-lived."
  },
  {
    q: "Pinus belongs to which Class within Gymnosperms?",
    type: "mcq",
    options: ["Cycadopsida", "Coniferopsida", "Ginkgopsida", "Gnetopsida"],
    answer: 1,
    explain: "Pinus sp. (Pine) belongs to Division Gymnosperms, Class Coniferopsida, Order Coniferales, Family Pinaceae."
  },
  {
    q: "What characterizes Pinus wood according to the Family Pinaceae characteristics?",
    type: "mcq",
    options: ["Non-resinous", "Resinous", "Lacking lignin", "Hollow"],
    answer: 1,
    explain: "Family Pinaceae is characterized by wood that is resinous, with plants being monoecious and spirally arranged sporophylls."
  },
  {
    q: "True or False: Pinus is dioecious, with separate male and female trees.",
    type: "tf",
    answer: false,
    explain: "Pinus is monoecious; the plant bears both male and female reproductive parts in cones on the same plant."
  },
  {
    q: "Underground, what type of root system does young Pinus initially form before it disappears?",
    type: "mcq",
    options: ["Fibrous roots", "Tap roots", "Adventitious roots", "Prop roots"],
    answer: 1,
    explain: "Underground root system is formed by tap roots which disappear early and only lateral roots persist later."
  },
  {
    q: "What fungal association surrounds the younger roots of Pinus?",
    type: "mcq",
    options: ["Endotrophic mycorrhizae", "Ectotrophic mycorrhizae", "Lichen symbiosis", "Rhizobium nodules"],
    answer: 1,
    explain: "The younger roots are generally surrounded by fungal hyphae, called the ectotrophic mycorrhizae."
  },
  {
    q: "Pinus branching pattern is described as what type?",
    type: "mcq",
    options: ["Dichotomous", "Monopodial", "Sympodial", "Random"],
    answer: 1,
    explain: "The branching in Pinus is monopodial and the branches are arranged in whorls."
  },
  {
    q: "What are the two dimorphic types of branches in Pinus?",
    type: "mcq",
    options: ["Tap and lateral", "Long shoots and dwarf shoots", "Vegetative and reproductive", "Apical and axillary"],
    answer: 1,
    explain: "Branches are dimorphic: branches of unlimited growth (long shoots) and branches of limited growth (dwarf shoots)."
  },
  {
    q: "What are the two dimorphic leaf types in Pinus?",
    type: "mcq",
    options: ["Simple and compound", "Scale leaves and foliage leaves", "Sessile and petiolate", "Opposite and alternate"],
    answer: 1,
    explain: "The leaves are dimorphic: scale leaves (brown, membranous, small) and foliage leaves (green, acicular, needle-like)."
  },
  {
    q: "What is a dwarf shoot with a group of needle-like foliage leaves called?",
    type: "mcq",
    options: ["Foliar spur", "Cone axis", "Sporophyll", "Microsporangium"],
    answer: 0,
    explain: "A dwarf shoot with a group of needle-like foliage leaves is known as a foliar spur."
  },
  {
    q: "Where are Pinus male cones borne?",
    type: "mcq",
    options: ["Terminally on branches of unlimited growth", "On lateral branches, replacing dwarf shoots", "Underground", "On the tap root"],
    answer: 1,
    explain: "Male cones are borne on lateral branches of unlimited growth, produced in clusters, replacing the dwarf shoots."
  },
  {
    q: "Where are Pinus female cones borne, and how frequently do they appear?",
    type: "mcq",
    options: ["On lateral branches, every year", "Terminally on branches of unlimited growth, appearing every three years", "Underground, continuously", "On scale leaves only, biennially"],
    answer: 1,
    explain: "Female cones are borne terminally on branches of unlimited growth, produced singly, replacing the long shoot, appearing after every three years."
  },
  {
    q: "True or False: Male and female cones are generally formed on one and the same branch in Pinus.",
    type: "tf",
    answer: false,
    explain: "Generally male and female cones are NOT formed on one and the same branch in Pinus."
  },
  {
    q: "What is the central axis of a Pinus male cone surrounded by, arranged spirally?",
    type: "mcq",
    options: ["Megasporophylls", "Microsporophylls", "Bract scales", "Ovuliferous scales"],
    answer: 1,
    explain: "Each male cone has a single, centrally located cone axis around which many scaly microsporophylls are spirally arranged."
  },
  {
    q: "Each Pinus microsporophyll has what shape for its central part, with a stalk-like base?",
    type: "mcq",
    options: ["Circular", "Triangular, expanded", "Square", "Linear"],
    answer: 1,
    explain: "Each microsporophyll has an expanded triangular central part and a stalk-like base, with the terminal part projecting into a tip."
  },
  {
    q: "What structures are present on the ovuliferous scale of the Pinus female cone, alongside the bract scale?",
    type: "mcq",
    options: ["Microsporangia", "Ovules", "Antheridia", "Paraphyses"],
    answer: 1,
    explain: "Based on the L.S. of the female cone diagram, ovules are borne on the ovuliferous scale alongside the bract scale around the cone axis."
  },
  {
    q: "How many microsporangia does each Pinus microsporophyll possess, according to the Family Pinaceae characteristics?",
    type: "mcq",
    options: ["One", "Two", "Four", "Eight"],
    answer: 1,
    explain: "Family Pinaceae characteristics state microsporophylls have two microsporangia."
  },
];

const ALL_QUESTIONS = [...BATCH_1, ...BATCH_2, ...BATCH_3];
