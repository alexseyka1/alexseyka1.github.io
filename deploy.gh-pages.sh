#!/usr/bin/env bash

repo='https://github.com/alexseyka1/alexseyka1.github.io.git'
from_branch='master'
to_branch='gh-pages'
out_dir='out'
tempdir='_gh-pages-export'

mkdir "../$tempdir" && (\
  cd "../$tempdir" \
  && git clone $repo code \
  && (cd code \
    && git checkout $from_branch \
    && yarn \
    && yarn build \
    && yarn export\
    && rm -rf ./node_modules \
  ) \
  && (cd code \
    && mv "./$out_dir" "../$out_dir" \
    && git checkout $to_branch \
    && cp -R "../$out_dir"/* . \
    && git status \
  ) \
  && (cd code \
    && git commit -a -m "Deployed by Bash script" \
    && git push origin $to_branch
  ) \
) \
&& rm -rf "../$tempdir"