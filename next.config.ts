import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  turbopack: {
    rules: {
      "*.{glsl,vert,frag,vs,fs}": {
        loaders: ["raw-loader", "glslify-loader"],
        as: "*.js"
      }
    }
  },
  experimental: {
    ppr: "incremental"
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.basehub.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "basehub.earth",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "fulcrumtechnologies.ai",
        pathname: "**"
      },
      { protocol: "https", hostname: "pbs.twimg.com", pathname: "**" },
      { protocol: "https", hostname: "abs.twimg.com", pathname: "**" }
    ]
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ["raw-loader", "glslify-loader"]
    })

    return config
  },

  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*"
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*"
      },
      {
        source: "/ingest/decide",
        destination: "https://us.i.posthog.com/decide"
      }
    ]
  },

  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,

  async redirects() {
    return [
      // Old basement routes → new Fulcrum routes
      {
        source: "/services",
        destination: "/products",
        permanent: true
      },
      {
        source: "/about",
        destination: "/products",
        permanent: true
      },
      {
        source: "/careers",
        destination: "/about",
        permanent: true
      },
      {
        source: "/people",
        destination: "/about",
        permanent: true
      },
      {
        source: "/work",
        destination: "/case-studies",
        permanent: true
      },
      {
        source: "/showcase",
        destination: "/case-studies",
        permanent: true
      },
      {
        source: "/showcase/:slug*",
        destination: "/case-studies",
        permanent: true
      },
      {
        source: "/blog",
        destination: "/insights",
        permanent: true
      },
      {
        source: "/blog/:slug*",
        destination: "/insights",
        permanent: true
      },
      {
        source: "/post/:slug*",
        destination: "/insights",
        permanent: true
      }
    ]
  }
}

export default nextConfig
