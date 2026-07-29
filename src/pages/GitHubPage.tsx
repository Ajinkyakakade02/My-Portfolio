// src/pages/GitHubPage.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaArrowLeft, 
  FaStar, 
  FaCodeBranch, 
  FaEye,
  FaLanguage,
  FaCode,
  FaUsers,
} from "react-icons/fa";
import { useTheme } from "@/hooks/useTheme";
import { siteConfig } from "@/constants";

const t = (theme: string, dark: string, light: string) =>
  theme === "dark" ? dark : light;

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string;
  updated_at: string;
  homepage: string;
}

const GitHubPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");

  // Fetch repositories from GitHub API
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${siteConfig.github.split("/").pop()}/repos?sort=updated&per_page=100`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        
        const data = await response.json();
        setRepos(data);
        setError(null);
      } catch (err) {
        setError("Unable to load repositories. Please try again later.");
        console.error("Error fetching repos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Get unique languages from repos
  const languages = ["all", ...new Set(repos.map(repo => repo.language).filter(Boolean))];
  
  // Filter repos by language
  const filteredRepos = selectedLanguage === "all" 
    ? repos 
    : repos.filter(repo => repo.language === selectedLanguage);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  };

  const stats = [
    { value: repos.length, label: "Repositories", icon: FaCode },
    { value: repos.reduce((acc, repo) => acc + repo.stargazers_count, 0), label: "Total Stars", icon: FaStar },
    { value: repos.reduce((acc, repo) => acc + repo.forks_count, 0), label: "Total Forks", icon: FaCodeBranch },
  ];

  // Card styling reused from About page
  const cardClass = `rounded-2xl p-6 mb-6 border ${t(
    theme,
    "bg-white/5 border-purple-500/30",
    "bg-white border-purple-200 shadow-sm"
  )}`;

  return (
    <div className={`min-h-screen py-20 transition-colors duration-300 ${t(theme, "bg-[#030014]", "bg-gray-50")}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <div className="flex justify-start mb-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate("/", { state: { scrollTo: "view-my-work" } })}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${t(
              theme,
              "bg-white/5 border-purple-500/30 text-purple-400 hover:bg-white/10",
              "bg-white border-purple-200 text-purple-600 hover:bg-purple-50 shadow-sm"
            )}`}
          >
            <FaArrowLeft className="text-xs" />
            Back to Home
          </motion.button>
        </div>

        {/* GitHub Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${cardClass} relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600">
                <FaGithub className="text-3xl text-white" />
              </div>
              <div>
                <h1 className={`text-3xl font-bold ${t(theme, "text-white", "text-gray-900")}`}>
                  {siteConfig.github.split("/").pop()}
                </h1>
                <p className={`text-sm ${t(theme, "text-gray-400", "text-gray-600")}`}>
                  GitHub Profile • {repos.length} repositories
                </p>
              </div>
            </div>
            <motion.a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${t(
                theme,
                "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border border-purple-500/30",
                "bg-purple-100 text-purple-700 hover:bg-purple-200 border border-purple-200"
              )}`}
            >
              <FaGithub />
              <span>View Profile</span>
              <FaExternalLinkAlt className="text-xs" />
            </motion.a>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`p-6 rounded-2xl border text-center transition-all duration-300 ${t(
                theme,
                "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
                "bg-white border-purple-200 hover:border-purple-300 shadow-sm"
              )}`}
            >
              <stat.icon className={`text-3xl mx-auto mb-2 ${t(theme, "text-purple-400", "text-purple-600")}`} />
              <div className={`text-4xl font-bold ${t(theme, "text-white", "text-gray-900")}`}>{stat.value}</div>
              <div className={`text-sm ${t(theme, "text-gray-400", "text-gray-600")}`}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Language Filter */}
        {languages.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedLanguage === lang
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg"
                    : t(
                        theme,
                        "bg-white/5 border border-purple-500/30 text-gray-400 hover:text-white hover:bg-white/10",
                        "bg-gray-100 border border-purple-200 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                      )
                }`}
              >
                {lang === "all" ? "All Languages" : lang}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Repository Cards */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-400">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700"
            >
              Try Again
            </button>
          </div>
        ) : filteredRepos.length === 0 ? (
          <div className="text-center py-20">
            <p className={t(theme, "text-gray-400", "text-gray-600")}>
              No repositories found for {selectedLanguage !== "all" ? selectedLanguage : ""}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredRepos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => window.open(repo.html_url, "_blank")}
                className={`group relative rounded-2xl border backdrop-blur-sm p-6 transition-all duration-300 cursor-pointer ${t(
                  theme,
                  "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
                  "bg-white border-purple-200 hover:border-purple-300 shadow-sm"
                )}`}
              >
                {/* Hover gradient border (like About page cards) */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Repository Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`text-xl font-bold group-hover:text-purple-400 transition-colors ${t(
                      theme,
                      "text-white",
                      "text-gray-900"
                    )}`}>
                      {repo.name}
                    </h3>
                    <FaExternalLinkAlt className={`text-xs opacity-0 group-hover:opacity-100 transition-opacity ${t(
                      theme,
                      "text-purple-400",
                      "text-gray-500"
                    )}`} />
                  </div>

                  {/* Description */}
                  <p className={`text-sm mb-4 leading-relaxed ${t(theme, "text-gray-400", "text-gray-600")}`}>
                    {repo.description || "No description provided"}
                  </p>

                  {/* Repository Stats */}
                  <div className="flex flex-wrap gap-4 mb-3">
                    {repo.language && (
                      <div className="flex items-center gap-1">
                        <FaLanguage className={`text-xs ${t(theme, "text-gray-500", "text-gray-400")}`} />
                        <span className={`text-xs ${t(theme, "text-gray-400", "text-gray-600")}`}>
                          {repo.language}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <FaStar className="text-xs text-yellow-500" />
                      <span className={`text-xs ${t(theme, "text-gray-400", "text-gray-600")}`}>
                        {repo.stargazers_count}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCodeBranch className={`text-xs ${t(theme, "text-gray-500", "text-gray-400")}`} />
                      <span className={`text-xs ${t(theme, "text-gray-400", "text-gray-600")}`}>
                        {repo.forks_count}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaEye className={`text-xs ${t(theme, "text-gray-500", "text-gray-400")}`} />
                      <span className={`text-xs ${t(theme, "text-gray-400", "text-gray-600")}`}>
                        {repo.watchers_count}
                      </span>
                    </div>
                  </div>

                  {/* Last Updated */}
                  <div className={`text-xs ${t(theme, "text-gray-500", "text-gray-400")}`}>
                    Updated: {formatDate(repo.updated_at)}
                  </div>
                </div>

                {/* Bottom accent line (like About page cards) */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        )}

        {/* GitHub Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`mt-12 rounded-2xl p-4 border ${t(
            theme,
            "bg-white/5 border-purple-500/20",
            "bg-white border-purple-200 shadow-sm"
          )}`}
        >
          <h3 className={`text-lg font-semibold mb-3 ${t(theme, "text-purple-400", "text-purple-600")}`}>
            Contribution Activity
          </h3>
          <img
            src={`https://ghchart.rshah.org/9333ea/${siteConfig.github.split("/").pop()}`}
            alt="GitHub contribution chart"
            className="w-full rounded-lg"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default GitHubPage;