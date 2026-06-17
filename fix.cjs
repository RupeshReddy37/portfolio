const fs = require('fs');
let f = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
f = f.replace("import { Github, Linkedin, Mail } from 'lucide-react';", "import { Mail } from 'lucide-react';\nimport { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';");
fs.writeFileSync('src/components/layout/Footer.tsx', f);
