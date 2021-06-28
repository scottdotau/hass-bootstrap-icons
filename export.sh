#!/bin/bash
BOOTSTRAP_ICONS="bootstrap-icons"
cp -r "./node_modules/${BOOTSTRAP_ICONS}/icons/" "./custom_components/${BOOTSTRAP_ICONS}/data/."
cp -r "./node_modules/${BOOTSTRAP_ICONS}/LICENSE.md" "./custom_components/${BOOTSTRAP_ICONS}/data/."