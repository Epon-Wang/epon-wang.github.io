---
layout: page
title: Box Stacking in PyBullet
description: Course Projects of ROB-UY 2004
img: assets/img/boxStacking.png
importance: 1
category: 2024
related_publications: false
---

***
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)
![SciPy](https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=%white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black)
![PyBullet](https://img.shields.io/badge/pybullet-passing?style=for-the-badge&color=ff9a00)

***
### **Box Stacking and Reordering**

<img src="nyufinger.gif" alt="114514" style="display:block;margin:0 auto;max-width:75%;height:auto;" />

- **Model**\
  [Open Dynamic Robot Initiative](https://open-dynamic-robot-initiative.github.io/), 2 sets of 3-DOF robotic fingers
- **Simulator**\
  [PyBullet](https://github.com/bulletphysics/bullet3)
- **Description**
  - Implemented ***forward and inverse kinematics*** with `NumPy` and `SciPy`; generated trajectory in joint-space with linear time interpolation for smooth motion
  - Designed and tuned an ***impedance controller*** operating in end-effector space to perform reaching, grasping, and lifting under collaboration
  - Collected and analyzed various simulation data to evaluate and validate controller performances, documented methods and results in interactive notebooks

***
### **Box Stacking and Reordering**

<img src="panda.gif" alt="114514" style="display:block;margin:0 auto;max-width:58%;height:auto;" />

- **Model**\
  [Franka Emika Panda](https://robodk.com/robot/Franka/Emika-Panda), 7-DOF robot arm
- **Simulator**\
  [PyBullet](https://github.com/bulletphysics/bullet3)
- **Description**
  - Implemented inverse kinematics with `NumPy` and `SciPy`; generated trajectory in joint-space with linear time interpolation for smooth motion
  - Designed and tuned an ***impedance controller*** with ***gravity compensation*** operating in end-effector space to perform reaching and grasping, aligned end-effector with ground plane to enhance stability and accuracy in box manipulation
  - Collected and analyzed various simulation data to evaluate and validate controller performances, documented methods and results in interactive notebooks