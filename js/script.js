/**
 * script.js — Elias Portfolio
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const toggleBtn = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');

  if (toggleBtn && siteNav) {
    toggleBtn.addEventListener('click', () => {
      siteNav.classList.toggle('open');
    });

    siteNav.querySelectorAll('.site-nav__link').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
      });
    });
  }

  // Active section link highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-nav__link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
