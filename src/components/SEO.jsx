import { useEffect } from 'react';

function updateMetaTag(attributeName, attributeValue, content) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function updateStructuredData(data) {
  if (!data) return;
  let script = document.querySelector('script[data-seo="page-schema"]');
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-seo', 'page-schema');
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function SEO({
  title,
  description,
  canonicalUrl,
  ogImage = 'https://www.charlesstsupply.com/plaster-washers.png',
  structuredData,
}) {
  useEffect(() => {
    if (title) {
      document.title = title;
      updateMetaTag('property', 'og:title', title);
      updateMetaTag('name', 'twitter:title', title);
    }
    if (description) {
      updateMetaTag('name', 'description', description);
      updateMetaTag('property', 'og:description', description);
      updateMetaTag('name', 'twitter:description', description);
    }
    if (canonicalUrl) {
      updateCanonical(canonicalUrl);
      updateMetaTag('property', 'og:url', canonicalUrl);
    }
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage);
      updateMetaTag('name', 'twitter:image', ogImage);
    }
    updateMetaTag('name', 'twitter:card', 'summary_large_image');

    if (structuredData) {
      updateStructuredData(structuredData);
    }
  }, [title, description, canonicalUrl, ogImage, structuredData]);

  return null;
}

export default SEO;
