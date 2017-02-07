#!/usr/bin/env bash

echo "Start cloning services..."

branch='master'

if [ $BRANCH ]; then
	branch=$BRANCH
fi

if [ -d service-all ]
then cd service-all &&  git pull
else git clone git@gitlab.quancheng-ec.com:shared/service-all.git -b $branch
fi
