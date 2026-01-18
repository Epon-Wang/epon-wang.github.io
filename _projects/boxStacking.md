---
layout: page
title: Box Stacking in PyBullet
description: Impedance controllers for two manipulators to perform box stacking
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

### **Box Stacking**

<img src="panda.gif" alt="114514" style="display:block;margin:0 auto;max-width:35%;height:auto;" />

- **Description**
  - Developed a robotic manipulation pipeline for a 7-DOF Franka Emika Panda robotic arm in PyBullet to autonomously execute multi-stage pick-and-place tasks}
  - Formulated a hybrid Jacobian controller by fusing World-Frame linear components with Body-Frame angular dynamics, enforcing a strict downward-facing end-effector constraint to eliminate undesired joint configurations}
  - Implemented a Cartesian impedance controller with gravity compensation, utilizing quintic spline interpolation for jerk-free trajectory generation and numerical optimization for inverse kinematics}

***

### **Box Stacking and Reordering**

<img src="nyufinger.gif" alt="114514" style="display:block;margin:0 auto;max-width:35%;height:auto;" />

- **Description**
  - Implemented ***forward and inverse kinematics*** for a 3-DOF robot finger with `NumPy` and `SciPy`; generated trajectory in joint-space with linear time interpolation for smooth motion
  - Designed and tuned an ***impedance controller*** operating in end-effector space to perform reaching, grasping, and lifting under collaboration
  - Collected and analyzed various simulation data to evaluate and validate controller performances, documented methods and results in interactive notebooks