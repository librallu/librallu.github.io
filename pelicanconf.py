#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Luc Libralesso'
SITENAME = 'Luc Libralesso'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'fr'

LOCALE = (
    'fr',
    'fr_FR.utf8'
)


# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None


# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10


# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

DIRECT_TEMPLATES = ['index', 'blog', 'experiments', 'apropos']
PAGINATED_DIRECT_TEMPLATES = ['index', 'blog', 'experiments', 'apropos']

STATIC_PATHS = ['cv', 'images']
PAGE_EXCLUDES = ['cv']
ARTICLE_EXCLUDES = ['cv']

THEME = 'pelican_in'

SITE_DESCRIPTION = 'Site perso de Luc Libralesso'
SITE_IMAGE = '/images/profil.jpg'
SITE_IMAGE_ALT = 'Luc Libralesso'
