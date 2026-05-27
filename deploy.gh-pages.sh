#!/usr/bin/env bash

repo='https://github.com/alexseyka1/alexseyka1.github.io.git'
from_branch='master'
to_branch='gh-pages'
out_dir='out'
tempdir='_gh-pages-export'

mkdir "../$tempdir" && (\
  cd "../$tempdir" \
  && git clone $repo build \
  && (cd build \
    && git checkout $from_branch \
    && pnpm i \
    && pnpm run build \
  ) \
  && git clone $repo deploy \
  && (cd deploy \
    && git checkout $to_branch \
    && git pull origin $to_branch \
    && cp -R "../build/$out_dir"/* . \
    && git status \
  ) \
  && (cd deploy \
    && git add . \
    && git commit -m "Deployed by Bash script" \
    && git push origin $to_branch
  ) \
) \
&& rm -rf "../$tempdir"